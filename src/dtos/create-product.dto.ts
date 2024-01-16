import { MaterialDTO } from "./material.dto";

export class CreateProductDTO {
    constructor(
        public readonly name: string,
        public readonly materials: MaterialDTO[],
        public readonly sellingPriceCents: number,
        public readonly quantityPerLot: number,
    ) {}

    toRequestBody(): object {
        let output: {
            name: string,
            materials: object[],
            selling_price_cents: number,
            quantity_per_lot: number,
        } = {
            name: this.name,
            materials: [],
            selling_price_cents: Math.ceil(this.sellingPriceCents),
            quantity_per_lot: Math.ceil(this.sellingPriceCents),
        };

        for(const material of this.materials) {
            output.materials.push(material.toRequestBody())
        }

        return output;
    }
}