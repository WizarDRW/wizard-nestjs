import { userOptionStub , deleted, updated} from "./userOption.stub";

export const UserOptionService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(userOptionStub()),
    findAll: jest.fn().mockResolvedValue([userOptionStub()]),
    create: jest.fn().mockResolvedValue(userOptionStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})