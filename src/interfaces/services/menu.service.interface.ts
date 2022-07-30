import { IMenuModel } from "../models/menu.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IMenuService extends ISubjectService<IMenuModel> {}
