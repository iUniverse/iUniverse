import { Test, TestingModule } from '@nestjs/testing';
import { GetTaskController } from './get-task.controller';

describe('TaskController', () => {
  let controller: GetTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTaskController],
    }).compile();

    controller = module.get<GetTaskController>(GetTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
