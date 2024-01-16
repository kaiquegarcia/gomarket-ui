import { CreateProductDTO } from "./create-product.dto";
import { MaterialDTO } from "./material.dto";

export class UpdateProductDTO extends CreateProductDTO {
    constructor(
        public readonly code: number,
        name: string,
        materials: MaterialDTO[],
        sellingPriceCents: number,
        quantityPerLot: number,
    ) {
        super(name, materials, sellingPriceCents, quantityPerLot);
    }
}