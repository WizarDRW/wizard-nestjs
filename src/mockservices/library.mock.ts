import { libraryStub, deleted, updated } from "./library.stub";

export const LibraryService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(libraryStub()),
    findAll: jest.fn().mockResolvedValue([libraryStub()]),
    create: jest.fn().mockResolvedValue(libraryStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})