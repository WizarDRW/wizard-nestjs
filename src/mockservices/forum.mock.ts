import { forumStub, deleted, updated } from "./forum.stub";

export const ForumService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(forumStub()),
    findAll: jest.fn().mockResolvedValue([forumStub()]),
    create: jest.fn().mockResolvedValue(forumStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})