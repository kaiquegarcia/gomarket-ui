import { UnitID } from "src/enums/unit-ids.enum";
import { Unit } from "src/enums/units.enum";

export class MaterialDTO {
    constructor(
        public readonly productCode: number,
        public readonly amountToFabricate: number,
        public readonly fabricationUnitID: UnitID,
        public readonly investedAmount: number,
        public readonly investUnitID: UnitID,
        public readonly investedCents: number,
        public readonly unit: Unit,
    ) {}

    toRequestBody(): object {
        return {
            product_code: this.productCode,
            amount_to_fabricate: this.amountToFabricate,
            fabrication_unit_id: this.fabricationUnitID,
            invested_amount: this.investedAmount,
            invest_unit_id: this.investUnitID,
            invested_cents: Math.ceil(this.investedCents),
            unit: this.unit,
        }
    }
}