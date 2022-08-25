import { ILibraryModel } from 'src/interfaces/models/library.model.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { LibraryService } from 'src/mockservices/library.mock';
import { deleted, libraryStub, updated } from 'src/mockservices/library.stub';
import { LibraryResolver } from './library.resolver';

describe('LibraryResolver', () => {
  let resolver: LibraryResolver;
  let service;
  let proxy;

  beforeEach(async () => {
    service = new LibraryService();
    proxy = new MalcolmXService<ILibraryModel>(service);
    resolver = new LibraryResolver(service, proxy);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('libraries', () => {
    let libraries: ILibraryModel[];
    test('should find and return a libraries', async () => {
      libraries = await resolver.libraries()

      expect(libraries).toEqual([libraryStub()])
    })
  })

  describe('librarybyid', () => {
    let library: ILibraryModel;
    test('should find and return a libraries', async () => {
      let id = '61f6f42ffb2c391314b6e749';
      library = await resolver.libraryById(id)

      expect(library).toEqual(libraryStub())
    })
  })

  describe('librarycreate', () => {
    let library: ILibraryModel;
    test('should find and return a libraries', async () => {
      library = await resolver.libraryCreate(
        {
          _id: null,
          contents: [],
          description: "",
          image_path: "",
          name: "",
          private: false,
          user_id: ""
        }
      )

      expect(library).toEqual(libraryStub())
    })
  })

  describe('libraryupdate', () => {
    let library: IMongoType;
    test('should find and return a libraries', async () => {
      library = await resolver.libraryUpdate(
        {
          _id: "61f6f42ffb2c391314b6e749",
          contents: [],
          description: "",
          image_path: "",
          name: "",
          private: false,
          user_id: ""
        }
      )

      expect(library).toEqual(updated())
    })
  })

  describe('librarydelete', () => {
    let library: IMongoType;
    test('should find and return a libraries', async () => {
      library = await resolver.libraryDelete("61f6f42ffb2c391314b6e749")

      expect(library).toEqual(deleted())
    })
  })
});
