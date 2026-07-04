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
    const className = getClassName(name);
    const camelName = getCamelName(name);

    // Controller Spec
    fs.writeFileSync(path.join(dir, `${name}.controller.spec.ts`), `import { Test, TestingModule } from '@nestjs/testing';
import { ${className}Controller } from './${name}.controller';
import { ${className}Service } from './${name}.service';

describe('${className}Controller', () => {
  let controller: ${className}Controller;
  let service: ${className}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [${className}Controller],
      providers: [
        {
          provide: ${className}Service,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({}),
            remove: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    controller = module.get<${className}Controller>(${className}Controller);
    service = module.get<${className}Service>(${className}Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
`);

    // Service Spec
    fs.writeFileSync(path.join(dir, `${name}.service.spec.ts`), `import { Test, TestingModule } from '@nestjs/testing';
import { ${className}Service } from './${name}.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ${className} } from './entities/${name}.entity';
import { Repository } from 'typeorm';

describe('${className}Service', () => {
  let service: ${className}Service;
  let repository: Repository<${className}>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ${className}Service,
        {
          provide: getRepositoryToken(${className}),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({}),
            delete: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<${className}Service>(${className}Service);
    repository = module.get<Repository<${className}>>(getRepositoryToken(${className}));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
`);
}

// Update app.e2e-spec.ts to test if standard root still works (just a sanity check).
// NestJS e2e testing is usually kept in test/app.e2e-spec.ts for the whole app.
console.log("Unit test files generated");
