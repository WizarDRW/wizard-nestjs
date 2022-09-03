import { Test, TestingModule } from '@nestjs/testing';
import { IUserModel } from 'src/interfaces/models/user.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { UserService } from 'src/mockservices/user.mock';
import { deleted, updated, userStub } from 'src/mockservices/user.stub';
import { UserResolver } from './user.resolver';

describe('UserResolver', () => {
  let resolver: UserResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new UserService();
    proxy = new MalcolmXService<IUserModel>(service);
    resolver = new UserResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('users', () => {
    let users: IUserModel[];
    test('should find and return a users', async () => {
      users = await resolver.users()

      expect(users).toEqual([userStub()])
    })
  })

  describe('userbyid', () => {
    let user: IUserModel;
    test('should find and return a users', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      user = await resolver.userById(id)

      expect(user).toEqual(userStub())
    })
  })

  describe('usercreate', () => {
    let user: IUserModel;
    test('should find and return a users', async () => {
      user = await resolver.userCreate(
        {
          _id: null,
          connections: [],
          create_date: new Date(),
          description: "",
          email: "",
          first_name: "",
          image_path: "",
          last_name: "",
          password: "",
          role: "",
          status: "",
          title: "",
          type: "",
          update_date: new Date(),
          username: ""
        }
      )

      expect(user).toEqual(userStub())
    })
  })

  describe('userupdate', () => {
    let user: IMongoType;
    test('should find and return a users', async () => {
      user = await resolver.userUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          connections: [],
          create_date: new Date(),
          description: "",
          email: "",
          first_name: "",
          image_path: "",
          last_name: "",
          password: "",
          role: "",
          status: "",
          title: "",
          type: "",
          update_date: new Date(),
          username: ""
        }
      )

      expect(user).toEqual(updated())
    })
  })

  describe('userdelete', () => {
    let user: IMongoType;
    test('should find and return a users', async () => {
      user = await resolver.userDelete("61f6f42ffb2c391314b6e749")

      expect(user).toEqual(deleted())
    })
  })
});
