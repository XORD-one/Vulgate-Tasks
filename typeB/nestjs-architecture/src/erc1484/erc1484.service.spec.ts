import { Test, TestingModule } from '@nestjs/testing';
import { Erc1484Service } from './erc1484.service';

describe('Erc1484Service', () => {
  let service: Erc1484Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Erc1484Service],
    }).compile();

    service = module.get<Erc1484Service>(Erc1484Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});