import { Test, TestingModule } from '@nestjs/testing';
import { IAboutModel } from 'src/interfaces/models/about.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { AboutService } from 'src/mockservices/about.mock';
import { aboutStub, deleted, updated } from 'src/mockservices/about.stub';
import { AboutResolver } from './about.resolver';

describe('AboutResolver', () => {
  let resolver: AboutResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new AboutService();
    proxy = new MalcolmXService<IAboutModel>(service);
    resolver = new AboutResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('abouts', () => {
    let abouts: IAboutModel[];
    test('should find and return a abouts', async () => {
      abouts = await resolver.abouts()

      expect(abouts).toEqual([aboutStub()])
    })
  })

  describe('aboutbyid', () => {
    let about: IAboutModel;
    test('should find and return a abouts', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      about = await resolver.aboutById(id)

      expect(about).toEqual(aboutStub())
    })
  })

  describe('aboutcreate', () => {
    let about: IAboutModel;
    test('should find and return a abouts', async () => {
      about = await resolver.aboutCreate(
        {
          _id: null,
          create_date: new Date(),
          descriptions: "Test",
          option: null,
          type: ""
        }
      )

      expect(about).toEqual(aboutStub())
    })
  })

  describe('aboutupdate', () => {
    let about: IMongoType;
    test('should find and return a abouts', async () => {
      about = await resolver.aboutUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          create_date: new Date(),
          descriptions: "Test 2",
          option: null,
          type: ""
        }
      )

      expect(about).toEqual(updated())
    })
  })

  describe('aboutdelete', () => {
    let about: IMongoType;
    test('should find and return a abouts', async () => {
      about = await resolver.aboutDelete("61f6f42ffb2c391314b6e749")

      expect(about).toEqual(deleted())
    })
  })
});
