import { menuStub , deleted, updated} from "./menu.stub";

export const MenuService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(menuStub()),
    findAll: jest.fn().mockResolvedValue([menuStub()]),
    create: jest.fn().mockResolvedValue(menuStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})