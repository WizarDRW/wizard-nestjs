import { categoryStub, deleted, updated } from "./category.stub";

export const CategoryService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(categoryStub()),
    findAll: jest.fn().mockResolvedValue([categoryStub()]),
    create: jest.fn().mockResolvedValue(categoryStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})