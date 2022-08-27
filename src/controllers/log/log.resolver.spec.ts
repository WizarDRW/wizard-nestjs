import { ILogModel } from 'src/interfaces/models/log.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { LogService } from 'src/mockservices/log.mock';
import { deleted, logStub, updated } from 'src/mockservices/log.stub';
import { LogResolver } from './log.resolver';

describe('LogResolver', () => {
  let resolver: LogResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new LogService();
    proxy = new MalcolmXService<ILogModel>(service);
    resolver = new LogResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('logs', () => {
    let logs: ILogModel[];
    test('should find and return a logs', async () => {
      logs = await resolver.logs()

      expect(logs).toEqual([logStub()])
    })
  })

  describe('logbyid', () => {
    let log: ILogModel;
    test('should find and return a logs', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      log = await resolver.logById(id)

      expect(log).toEqual(logStub())
    })
  })

  describe('logcreate', () => {
    let log: ILogModel;
    test('should find and return a logs', async () => {
      log = await resolver.logCreate(
        {
          _id: null,
          create_date: new Date(),
          datas: [],
          title: "",
          user_id: ""
        }
      )

      expect(log).toEqual(logStub())
    })
  })

  describe('logupdate', () => {
    let log: IMongoType;
    test('should find and return a logs', async () => {
      log = await resolver.logUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          create_date: new Date(),
          datas: [],
          title: "",
          user_id: ""
        }
      )

      expect(log).toEqual(updated())
    })
  })

  describe('logdelete', () => {
    let log: IMongoType;
    test('should find and return a logs', async () => {
      log = await resolver.logDelete("61f6f42ffb2c391314b6e749")

      expect(log).toEqual(deleted())
    })
  })
});
