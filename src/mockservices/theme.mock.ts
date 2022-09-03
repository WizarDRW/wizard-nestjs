import { themeStub , deleted, updated} from "./theme.stub";

export const ThemeService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(themeStub()),
    findAll: jest.fn().mockResolvedValue([themeStub()]),
    create: jest.fn().mockResolvedValue(themeStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})