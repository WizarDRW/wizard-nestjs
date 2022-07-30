import { ICategoryModel } from "../models/category.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface ICategoryService extends ISubjectService<ICategoryModel> {}
