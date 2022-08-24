import { Test, TestingModule } from '@nestjs/testing';
import { IForumModel } from 'src/interfaces/models/forum.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { ForumService } from 'src/mockservices/forum.mock';
import { deleted, forumStub, updated } from 'src/mockservices/forum.stub';
import { ForumResolver } from './forum.resolver';

describe('ForumResolver', () => {
  let resolver: ForumResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new ForumService();
    proxy = new MalcolmXService<IForumModel>(service);
    resolver = new ForumResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('forums', () => {
    let forums: IForumModel[];
    test('should find and return a forums', async () => {
      forums = await resolver.forums()

      expect(forums).toEqual([forumStub()])
    })
  })

  describe('forumbyid', () => {
    let forum: IForumModel;
    test('should find and return a forums', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      forum = await resolver.forumById(id)

      expect(forum).toEqual(forumStub())
    })
  })

  describe('forumcreate', () => {
    let forum: IForumModel;
    test('should find and return a forums', async () => {
      forum = await resolver.forumCreate(
        {
          _id: null,
          categories: [],
          create_date: new Date(),
          description: "Test",
          comments: [],
          connects: [],
          impressions: [],
          update_date: new Date(),
          name: "Test",
          short_description: "",
          status: true,
          tags: [],
          user_id: ""
        }
      )

      expect(forum).toEqual(forumStub())
    })
  })

  describe('forumupdate', () => {
    let forum: IMongoType;
    test('should find and return a forums', async () => {
      forum = await resolver.forumUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          categories: [],
          create_date: new Date(),
          description: "Test",
          comments: [],
          connects: [],
          impressions: [],
          update_date: new Date(),
          name: "Test",
          short_description: "",
          status: true,
          tags: [],
          user_id: ""
        }
      )

      expect(forum).toEqual(updated())
    })
  })

  describe('forumdelete', () => {
    let forum: IMongoType;
    test('should find and return a forums', async () => {
      forum = await resolver.forumDelete("61f6f42ffb2c391314b6e749")

      expect(forum).toEqual(deleted())
    })
  })
});
