import { Unit } from "src/enums/units.enum";

export interface MaterialResponse {
    name: string,
    unit: Unit,
    amount_to_fabricate_a_lot: number,
    invested_amount: number,
    invested_cents: number,
    invested_money: string,
    cost_to_produce_a_lot_cents: number,
    cost_to_produce_a_lot_money: string
}