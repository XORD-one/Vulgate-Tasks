import { Test, TestingModule } from '@nestjs/testing';
import { Erc1484Controller } from './erc1484.controller';

describe('Erc1484Controller', () => {
  let controller: Erc1484Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Erc1484Controller],
    }).compile();

    controller = module.get<Erc1484Controller>(Erc1484Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});