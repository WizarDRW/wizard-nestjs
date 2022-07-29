import { PipelineStage } from "mongoose";
import { ISubjectService } from "src/interfaces/services/subject.service.interface";
import { IMongoType } from "../utils/mongo.util";

export class MalcolmXService<Type> implements ISubjectService<Type> {
    private _subject: ISubjectService<Type>;
    constructor(subject: ISubjectService<Type>) {
        this._subject = subject;
    }

    findAll(dynamicParameters?: PipelineStage[]): Promise<Type[]> {
        if (this.isAccess())
            return this._subject.findAll(dynamicParameters);
        else
            throw new Error("Method not implemented.");
    }
    findById(id: String): Promise<Type> {
        if (this.isAccess())
            return this._subject.findById(id);
        else
            throw new Error("Method not implemented.");
    }
    create(obj: Type): Promise<Type> {
        if (this.isAccess())
            return this._subject.create(obj);
        else
            throw new Error("Method not implemented.");
    }
    update(obj: Type): Promise<IMongoType> {
        try {
            if (this.isAccess())
                return this._subject.update(obj);
            else
                throw new Error("Method not implemented.");
        } catch (error) {
            console.log(error);
        }
    }
    delete(id: String): Promise<IMongoType> {
        if (this.isAccess())
            return this._subject.delete(id);
        else
            throw new Error("Method not implemented.");
    }
    isAccess(): Boolean {
        console.log('Erişimi var!');
        return true;
    }
}