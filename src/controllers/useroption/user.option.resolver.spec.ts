import { Test, TestingModule } from '@nestjs/testing';
import { IUserOptionModel } from 'src/interfaces/models/user.option.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { deleted, updated, userOptionStub } from 'src/mockservices/userOption.stub';
import { UserOptionService } from 'src/mockservices/userOption.mock';
import { UserOptionResolver } from './user.option.resolver';

describe('UserOptionResolver', () => {
  let resolver: UserOptionResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new UserOptionService();
    proxy = new MalcolmXService<IUserOptionModel>(service);
    resolver = new UserOptionResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('userOptions', () => {
    let userOptions: IUserOptionModel[];
    test('should find and return a userOptions', async () => {
      userOptions = await resolver.userOptions()

      expect(userOptions).toEqual([userOptionStub()])
    })
  })

  describe('userOptionbyid', () => {
    let userOption: IUserOptionModel;
    test('should find and return a userOptions', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      userOption = await resolver.userOptionById(id)

      expect(userOption).toEqual(userOptionStub())
    })
  })

  describe('userOptioncreate', () => {
    let userOption: IUserOptionModel;
    test('should find and return a userOptions', async () => {
      userOption = await resolver.userOptionCreate(
        {
          _id: null,
          dark: "",
          isReveseFullName: true,
          isViewCreateDate: true,
          isViewDescription: false,
          isViewEmail: true,
          isViewFirstName: false,
          isViewImagePath: false,
          isViewLastName: false,
          isViewRole: false,
          isViewTitle: true,
          isViewUserName: false,
          light: "",
          passwordOptions: [],
          user_id: ""
        }
      )

      expect(userOption).toEqual(userOptionStub())
    })
  })

  describe('userOptionupdate', () => {
    let userOption: IMongoType;
    test('should find and return a userOptions', async () => {
      userOption = await resolver.userOptionUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          dark: "",
          isReveseFullName: true,
          isViewCreateDate: true,
          isViewDescription: false,
          isViewEmail: true,
          isViewFirstName: false,
          isViewImagePath: false,
          isViewLastName: false,
          isViewRole: false,
          isViewTitle: true,
          isViewUserName: false,
          light: "",
          passwordOptions: [],
          user_id: ""
        }
      )

      expect(userOption).toEqual(updated())
    })
  })

  describe('userOptiondelete', () => {
    let userOption: IMongoType;
    test('should find and return a userOptions', async () => {
      userOption = await resolver.userOptionDelete("61f6f42ffb2c391314b6e749")

      expect(userOption).toEqual(deleted())
    })
  })
});
