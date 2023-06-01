import { JerseyModel } from "./jersey.model";
import { OrderModel } from "./order.model";

export interface InitialStateModel {
    menuIsOpen: boolean,
    cart: JerseyModel[],
    favorites: JerseyModel[],
    orders: OrderModel[]
}