import { aboutStub, deleted, updated } from "./about.stub";

export const AboutService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(aboutStub()),
    findAll: jest.fn().mockResolvedValue([aboutStub()]),
    create: jest.fn().mockResolvedValue(aboutStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})