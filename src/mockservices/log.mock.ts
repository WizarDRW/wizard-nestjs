import { logStub , deleted, updated} from "./log.stub";

export const LogService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(logStub()),
    findAll: jest.fn().mockResolvedValue([logStub()]),
    create: jest.fn().mockResolvedValue(logStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})