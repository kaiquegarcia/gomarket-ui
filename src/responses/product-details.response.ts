import { MaterialResponse } from "./material.response";

export interface ProductDetailsResponse {
    code: number,
    name: string,
    materials: MaterialResponse[],
    selling_price_cents: number,
    selling_price_money: string,
    quantity_per_lot: number,
    cost_to_produce_one_cents: number,
    cost_to_produce_one_money: string,
    cost_to_produce_a_lot_cents: number,
    cost_to_produce_a_lot_money: string,
    created_at: string,
    updated_at: string,
}