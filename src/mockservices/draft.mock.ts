import { draftStub, deleted, updated } from "./draft.stub";

export const DraftService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(draftStub()),
    findAll: jest.fn().mockResolvedValue([draftStub()]),
    create: jest.fn().mockResolvedValue(draftStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})