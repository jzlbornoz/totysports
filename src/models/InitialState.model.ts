import { JerseyModel } from "./jersey.model";

export interface InitialStateModel {
    menuIsOpen: boolean,
    cart: JerseyModel[]
}