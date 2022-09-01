import { optionStub , deleted, updated} from "./option.stub";

export const OptionService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(optionStub()),
    findAll: jest.fn().mockResolvedValue([optionStub()]),
    create: jest.fn().mockResolvedValue(optionStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})