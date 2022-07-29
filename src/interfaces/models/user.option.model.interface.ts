import { IBaseModel } from "./base.model.interface";

export interface IUserOptionModel extends IBaseModel {
    readonly user_id: String
    readonly isViewFirstName: Boolean
    readonly isViewLastName: Boolean
    readonly isReveseFullName: Boolean
    readonly isViewUserName: Boolean
    readonly isViewEmail: Boolean
    readonly isViewImagePath: Boolean
    readonly isViewDescription: Boolean
    readonly isViewRole: Boolean
    readonly isViewTitle: Boolean
    readonly isViewCreateDate: Boolean
    readonly dark: String
    readonly light: String
    readonly passwordOptions: Array<IPasswordOptionModel>
}

interface IPasswordOptionModel {
    readonly isPrivateKey: Boolean
    readonly privateKey: String
    readonly minLength: Number
    readonly maxLength: Number
    readonly isIrregularCharracter: Boolean
    readonly minIrregularCharracterLength: Number
    readonly maxIrregularCharracterLength: Number
    readonly isUpperCase: Boolean
    readonly minUpperCaseLength: Number
    readonly maxUpperCaseLength: Number
    readonly isLowerCase: Boolean
    readonly minLowerCaseLength: Number
    readonly maxLowerCaseLength: Number
    readonly isNumber: Boolean
    readonly minNumberLength: Number
    readonly maxNumberLength: Number
}