import { BuyerModel } from "./buyer.model";
import { JerseyModel } from "./jersey.model";

export interface OrderModel {
    id: number,
    amount: number,
    buyer: BuyerModel,
    items: JerseyModel[],
    date: Date,
}