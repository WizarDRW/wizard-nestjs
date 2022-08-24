import { Test, TestingModule } from '@nestjs/testing';
import { ICategoryModel } from 'src/interfaces/models/category.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { CategoryService } from 'src/mockservices/category.mock';
import { categoryStub, deleted, updated } from 'src/mockservices/category.stub';
import { CategoryResolver } from './category.resolver';

describe('CategoryResolver', () => {
  let resolver: CategoryResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new CategoryService();
    proxy = new MalcolmXService<ICategoryModel>(service);
    resolver = new CategoryResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('categories', () => {
    let categories: ICategoryModel[];
    test('should find and return a categories', async () => {
      categories = await resolver.categories()

      expect(categories).toEqual([categoryStub()])
    })
  })

  describe('categorybyid', () => {
    let category: ICategoryModel;
    test('should find and return a categories', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      category = await resolver.categoryById(id)

      expect(category).toEqual(categoryStub())
    })
  })

  describe('categorycreate', () => {
    let category: ICategoryModel;
    test('should find and return a categories', async () => {
      category = await resolver.categoryCreate(
        {
          _id: null,
          type: "",
          categories: [1,2,3,4]
        }
      )

      expect(category).toEqual(categoryStub())
    })
  })

  describe('categoryupdate', () => {
    let category: IMongoType;
    test('should find and return a categories', async () => {
      category = await resolver.categoryUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          type: "",
          categories: [1,2,3,4]
        }
      )

      expect(category).toEqual(updated())
    })
  })

  describe('categorydelete', () => {
    let category: IMongoType;
    test('should find and return a categories', async () => {
      category = await resolver.categoryDelete("61f6f42ffb2c391314b6e749")

      expect(category).toEqual(deleted())
    })
  })
});
