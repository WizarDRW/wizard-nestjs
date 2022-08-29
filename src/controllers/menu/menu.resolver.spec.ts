import { Test, TestingModule } from '@nestjs/testing';
import { IMenuModel } from 'src/interfaces/models/menu.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { MenuService } from 'src/mockservices/menu.mock';
import { deleted, menuStub, updated } from 'src/mockservices/menu.stub';
import { MenuResolver } from './menu.resolver';

describe('MenuResolver', () => {
  let resolver: MenuResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new MenuService();
    proxy = new MalcolmXService<IMenuModel>(service);
    resolver = new MenuResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('menus', () => {
    let menus: IMenuModel[];
    test('should find and return a menus', async () => {
      menus = await resolver.menus()

      expect(menus).toEqual([menuStub()])
    })
  })

  describe('menubyid', () => {
    let menu: IMenuModel;
    test('should find and return a menus', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      menu = await resolver.menuById(id)

      expect(menu).toEqual(menuStub())
    })
  })

  describe('menucreate', () => {
    let menu: IMenuModel;
    test('should find and return a menus', async () => {
      menu = await resolver.menuCreate(
        {
          _id: null,
          children: [],
          description: "",
          name: "",
          path: "",
          sort: "",
          status: false
        }
      )

      expect(menu).toEqual(menuStub())
    })
  })

  describe('menuupdate', () => {
    let menu: IMongoType;
    test('should find and return a menus', async () => {
      menu = await resolver.menuUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          children: [],
          description: "",
          name: "",
          path: "",
          sort: "",
          status: false
        }
      )

      expect(menu).toEqual(updated())
    })
  })

  describe('menudelete', () => {
    let menu: IMongoType;
    test('should find and return a menus', async () => {
      menu = await resolver.menuDelete("61f6f42ffb2c391314b6e749")

      expect(menu).toEqual(deleted())
    })
  })
});
