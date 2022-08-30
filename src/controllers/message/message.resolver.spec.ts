import { Test, TestingModule } from '@nestjs/testing';
import { IMessageModel } from 'src/interfaces/models/message.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { MessageService } from 'src/mockservices/message.mock';
import { deleted, messageStub, updated } from 'src/mockservices/message.stub';
import { MessageResolver } from './message.resolver';

describe('MessageResolver', () => {
  let resolver: MessageResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new MessageService();
    proxy = new MalcolmXService<IMessageModel>(service);
    resolver = new MessageResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('messages', () => {
    let messages: IMessageModel[];
    test('should find and return a messages', async () => {
      messages = await resolver.messages()

      expect(messages).toEqual([messageStub()])
    })
  })

  describe('messagebyid', () => {
    let message: IMessageModel;
    test('should find and return a messages', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      message = await resolver.messageById(id)

      expect(message).toEqual(messageStub())
    })
  })

  describe('messagecreate', () => {
    let message: IMessageModel;
    test('should find and return a messages', async () => {
      message = await resolver.messageCreate(
        {
          _id: null,
          messages: [],
          user_id: ""
        }
      )

      expect(message).toEqual(messageStub())
    })
  })

  describe('messageupdate', () => {
    let message: IMongoType;
    test('should find and return a messages', async () => {
      message = await resolver.messageUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          messages: [],
          user_id: ""
        }
      )

      expect(message).toEqual(updated())
    })
  })

  describe('messagedelete', () => {
    let message: IMongoType;
    test('should find and return a messages', async () => {
      message = await resolver.messageDelete("61f6f42ffb2c391314b6e749")

      expect(message).toEqual(deleted())
    })
  })
});
