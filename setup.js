const fs = require('fs');
const path = require('path');

const resources = ['novel', 'novel-chapter', 'comment'];

const getClassName = (name) => {
    return name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
};

const getCamelName = (name) => {
    return name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
};

for (const name of resources) {
    const dir = path.join(__dirname, 'src', name);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    const entitiesDir = path.join(dir, 'entities');
    if (!fs.existsSync(entitiesDir)) fs.mkdirSync(entitiesDir, { recursive: true });
    
    const className = getClassName(name);
    const camelName = getCamelName(name);

    // Entity (empty for now, will populate later)
    fs.writeFileSync(path.join(entitiesDir, `${name}.entity.ts`), `export class ${className} {}`);

    // Service
    fs.writeFileSync(path.join(dir, `${name}.service.ts`), `import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ${className} } from './entities/${name}.entity';

@Injectable()
export class ${className}Service {
  constructor(
    @InjectRepository(${className})
    private ${camelName}Repository: Repository<${className}>,
  ) {}

  findAll() {
    return this.${camelName}Repository.find();
  }

  findOne(id: number | string) {
    return this.${camelName}Repository.findOne({ where: { id: id as any } });
  }

  remove(id: number | string) {
    return this.${camelName}Repository.delete(id);
  }
}
`);

    // Controller
    fs.writeFileSync(path.join(dir, `${name}.controller.ts`), `import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ${className}Service } from './${name}.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('${name}')
@Controller('${name}')
export class ${className}Controller {
  constructor(private readonly ${camelName}Service: ${className}Service) {}

  @Get()
  findAll() {
    return this.${camelName}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${camelName}Service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${camelName}Service.remove(id);
  }
}
`);

    // Module
    fs.writeFileSync(path.join(dir, `${name}.module.ts`), `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ${className}Service } from './${name}.service';
import { ${className}Controller } from './${name}.controller';
import { ${className} } from './entities/${name}.entity';

@Module({
  imports: [TypeOrmModule.forFeature([${className}])],
  controllers: [${className}Controller],
  providers: [${className}Service],
})
export class ${className}Module {}
`);
}
console.log("Files generated");
