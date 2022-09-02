import { Test, TestingModule } from '@nestjs/testing';
import { ITaskModel } from 'src/interfaces/models/task.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { TaskService } from 'src/mockservices/task.mock';
import { deleted, taskStub, updated } from 'src/mockservices/task.stub';
import { TaskResolver } from './task.resolver';

describe('TaskResolver', () => {
  let resolver: TaskResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new TaskService();
    proxy = new MalcolmXService<ITaskModel>(service);
    resolver = new TaskResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('tasks', () => {
    let tasks: ITaskModel[];
    test('should find and return a tasks', async () => {
      tasks = await resolver.tasks()

      expect(tasks).toEqual([taskStub()])
    })
  })

  describe('taskbyid', () => {
    let task: ITaskModel;
    test('should find and return a tasks', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      task = await resolver.taskById(id)

      expect(task).toEqual(taskStub())
    })
  })

  describe('taskcreate', () => {
    let task: ITaskModel;
    test('should find and return a tasks', async () => {
      task = await resolver.taskCreate(
        {
          _id: null
        }
      )

      expect(task).toEqual(taskStub())
    })
  })

  describe('taskupdate', () => {
    let task: IMongoType;
    test('should find and return a tasks', async () => {
      task = await resolver.taskUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749"
        }
      )

      expect(task).toEqual(updated())
    })
  })

  describe('taskdelete', () => {
    let task: IMongoType;
    test('should find and return a tasks', async () => {
      task = await resolver.taskDelete("61f6f42ffb2c391314b6e749")

      expect(task).toEqual(deleted())
    })
  })
});
