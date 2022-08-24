import { IDraftModel } from 'src/interfaces/models/draft.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { DraftService } from 'src/mockservices/draft.mock';
import { deleted, draftStub, updated } from 'src/mockservices/draft.stub';
import { DraftResolver } from './draft.resolver';

describe('DraftResolver', () => {
  let resolver: DraftResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new DraftService();
    proxy = new MalcolmXService<IDraftModel>(service);
    resolver = new DraftResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('drafts', () => {
    let drafts: IDraftModel[];
    test('should find and return a drafts', async () => {
      drafts = await resolver.drafts()

      expect(drafts).toEqual([draftStub()])
    })
  })

  describe('draftbyid', () => {
    let draft: IDraftModel;
    test('should find and return a drafts', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      draft = await resolver.draftById(id)

      expect(draft).toEqual(draftStub())
    })
  })

  describe('draftcreate', () => {
    let draft: IDraftModel;
    test('should find and return a drafts', async () => {
      draft = await resolver.draftCreate(
        {
          _id: null,
          create_date: new Date(),
          data: {},
          type: "",
          update_date: new Date(),
          user_id: ""
        }
      )

      expect(draft).toEqual(draftStub())
    })
  })

  describe('draftupdate', () => {
    let draft: IMongoType;
    test('should find and return a drafts', async () => {
      draft = await resolver.draftUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          create_date: new Date(),
          data: {},
          type: "",
          update_date: new Date(),
          user_id: ""
        }
      )

      expect(draft).toEqual(updated())
    })
  })

  describe('draftdelete', () => {
    let draft: IMongoType;
    test('should find and return a drafts', async () => {
      draft = await resolver.draftDelete("61f6f42ffb2c391314b6e749")

      expect(draft).toEqual(deleted())
    })
  })
});
