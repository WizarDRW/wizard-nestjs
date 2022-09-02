import { taskStub , deleted, updated} from "./task.stub";

export const TaskService = jest.fn().mockReturnValue({
    findById: jest.fn().mockResolvedValue(taskStub()),
    findAll: jest.fn().mockResolvedValue([taskStub()]),
    create: jest.fn().mockResolvedValue(taskStub()),
    update: jest.fn().mockResolvedValue(updated()),
    delete: jest.fn().mockResolvedValue(deleted())
})