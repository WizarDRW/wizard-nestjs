import { messageStub , deleted, updated} from "./message.stub";

export const MessageService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(messageStub()),
    findAll: jest.fn().mockResolvedValue([messageStub()]),
    create: jest.fn().mockResolvedValue(messageStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})