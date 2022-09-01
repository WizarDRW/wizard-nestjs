import { Test, TestingModule } from '@nestjs/testing';
import { IOptionModel } from 'src/interfaces/models/option.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { OptionService } from 'src/mockservices/option.mock';
import { deleted, optionStub, updated } from 'src/mockservices/option.stub';
import { OptionResolver } from './option.resolver';

describe('OptionResolver', () => {
  let resolver: OptionResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new OptionService();
    proxy = new MalcolmXService<IOptionModel>(service);
    resolver = new OptionResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('options', () => {
    let options: IOptionModel[];
    test('should find and return a options', async () => {
      options = await resolver.options()

      expect(options).toEqual([optionStub()])
    })
  })

  describe('optionbyid', () => {
    let option: IOptionModel;
    test('should find and return a options', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      option = await resolver.optionById(id)

      expect(option).toEqual(optionStub())
    })
  })

  describe('optioncreate', () => {
    let option: IOptionModel;
    test('should find and return a options', async () => {
      option = await resolver.optionCreate(
        {
          _id: null,
          codedby: "",
          header_logo: "",
          ico: "",
          json_social: {},
          main_logo: "",
          main_title: "",
          startus: "",
          title: ""
        }
      )

      expect(option).toEqual(optionStub())
    })
  })

  describe('optionupdate', () => {
    let option: IMongoType;
    test('should find and return a options', async () => {
      option = await resolver.optionUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          codedby: "",
          header_logo: "",
          ico: "",
          json_social: {},
          main_logo: "",
          main_title: "",
          startus: "",
          title: ""
        }
      )

      expect(option).toEqual(updated())
    })
  })

  describe('optiondelete', () => {
    let option: IMongoType;
    test('should find and return a options', async () => {
      option = await resolver.optionDelete("61f6f42ffb2c391314b6e749")

      expect(option).toEqual(deleted())
    })
  })
});
