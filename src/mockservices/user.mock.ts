import { userStub , deleted, updated} from "./user.stub";

export const UserService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(userStub()),
    findAll: jest.fn().mockResolvedValue([userStub()]),
    create: jest.fn().mockResolvedValue(userStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})