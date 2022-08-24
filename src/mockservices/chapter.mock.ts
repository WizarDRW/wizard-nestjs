import { chapterStub, deleted, updated } from "./chapter.stub";

export const ChapterService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(chapterStub()),
    findAll: jest.fn().mockResolvedValue([chapterStub()]),
    create: jest.fn().mockResolvedValue(chapterStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})