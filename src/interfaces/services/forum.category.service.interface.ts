import { IForumCategoryModel } from "../models/forum.category.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IForumCategoryService extends ISubjectService<IForumCategoryModel> {}
