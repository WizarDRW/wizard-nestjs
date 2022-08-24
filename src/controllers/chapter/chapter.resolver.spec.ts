import { IChapterModel } from 'src/interfaces/models/chapter.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { CategoryService } from 'src/mockservices/category.mock';
import { chapterStub, deleted, updated } from 'src/mockservices/chapter.stub';
import { ChapterResolver } from './chapter.resolver';

describe('ChapterResolver', () => {
  let resolver: ChapterResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new CategoryService();
    proxy = new MalcolmXService<IChapterModel>(service);
    resolver = new ChapterResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('chapters', () => {
    let chapters: IChapterModel[];
    test('should find and return a chapters', async () => {
      chapters = await resolver.chapters()

      expect(chapters).toEqual([chapterStub()])
    })
  })

  describe('chapterbyid', () => {
    let chapter: IChapterModel;
    test('should find and return a chapters', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      chapter = await resolver.chapterById(id)

      expect(chapter).toEqual(chapterStub())
    })
  })

  describe('chaptercreate', () => {
    let chapter: IChapterModel;
    test('should find and return a chapters', async () => {
      chapter = await resolver.chapterCreate(
        {
          _id: null,
          categories: [],
          create_date: new Date(),
          description: "Test",
          descriptions: [],
          image_path: "",
          impressions: [],
          name: "Test",
          short_description: "",
          showcases: [],
          status: true,
          tags: [],
          user_id: ""
        }
      )

      expect(chapter).toEqual(chapterStub())
    })
  })

  describe('chapterupdate', () => {
    let chapter: IMongoType;
    test('should find and return a chapters', async () => {
      chapter = await resolver.chapterUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          categories: [],
          create_date: new Date(),
          description: "Test",
          descriptions: [],
          image_path: "",
          impressions: [],
          name: "Test",
          short_description: "",
          showcases: [],
          status: true,
          tags: [],
          user_id: ""
        }
      )

      expect(chapter).toEqual(updated())
    })
  })

  describe('chapterdelete', () => {
    let chapter: IMongoType;
    test('should find and return a chapters', async () => {
      chapter = await resolver.chapterDelete("61f6f42ffb2c391314b6e749")

      expect(chapter).toEqual(deleted())
    })
  })
});
