import { Test, TestingModule } from '@nestjs/testing';
import { IThemeModel } from 'src/interfaces/models/theme.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { ThemeService } from 'src/mockservices/theme.mock';
import { deleted, themeStub, updated } from 'src/mockservices/theme.stub';
import { ThemeResolver } from './theme.resolver';

describe('ThemeResolver', () => {
  let resolver: ThemeResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new ThemeService();
    proxy = new MalcolmXService<IThemeModel>(service);
    resolver = new ThemeResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('themes', () => {
    let themes: IThemeModel[];
    test('should find and return a themes', async () => {
      themes = await resolver.themes()

      expect(themes).toEqual([themeStub()])
    })
  })

  describe('themebyid', () => {
    let theme: IThemeModel;
    test('should find and return a themes', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      theme = await resolver.themeById(id)

      expect(theme).toEqual(themeStub())
    })
  })

  describe('themecreate', () => {
    let theme: IThemeModel;
    test('should find and return a themes', async () => {
      theme = await resolver.themeCreate(
        {
          _id: null,
          base_colors: [],
          color_scss: "",
          mode: "",
          name: ""
        }
      )

      expect(theme).toEqual(themeStub())
    })
  })

  describe('themeupdate', () => {
    let theme: IMongoType;
    test('should find and return a themes', async () => {
      theme = await resolver.themeUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          base_colors: [],
          color_scss: "",
          mode: "",
          name: ""
        }
      )

      expect(theme).toEqual(updated())
    })
  })

  describe('themedelete', () => {
    let theme: IMongoType;
    test('should find and return a themes', async () => {
      theme = await resolver.themeDelete("61f6f42ffb2c391314b6e749")

      expect(theme).toEqual(deleted())
    })
  })
});
