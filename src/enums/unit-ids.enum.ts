import { Unit } from "./units.enum"

export enum UnitID {
	MILLIGRAM_ID             = "milligram",
	GRAM_ID                  = "gram",
	OUNCE_ID                 = "ounce",
	POUND_ID                 = "pound",
	KILOGRAM_ID              = "kilogram",
	TONNE_ID                 = "tonne",
	MILLILITER_ID            = "milliliter",
	AMERICAN_TEASPOON_ID     = "american_teaspoon",
	AMERICAN_TABLESPOON_ID   = "american_tablespoon",
	AMERICAN_LIQUID_OUNCE_ID = "american_liquid_ounce",
	GLASS_ID                 = "glass",
	AMERICAN_PAINT_ID        = "american_paint",
	AMERICAN_LIQUID_QUART_ID = "american_liquid_quart",
	LITER_ID                 = "liter",
	AMERICAN_GALLON_ID       = "american_gallon",
	CUBIC_METER_ID           = "cubic_meter",
	MILLIMETER_ID            = "millimeter",
	CENTIMETER_ID            = "centimeter",
	INCH_ID                  = "inch",
	FOOT_ID                  = "foot",
	YARD_ID                  = "yard",
	METER_ID                 = "meter",
	KILOMETER_ID             = "kilometer",
	MILE_ID                  = "mile",
	UNIT_ID                  = "un",
}

export function GetBaseUnit(id: UnitID): Unit {
	switch (id) {
	case UnitID.MILLIGRAM_ID:
		return Unit.MILLIGRAM
	case UnitID.GRAM_ID:
		return Unit.GRAM
	case UnitID.OUNCE_ID:
		return Unit.OUNCE
	case UnitID.POUND_ID:
		return Unit.POUND
	case UnitID.KILOGRAM_ID:
		return Unit.KILOGRAM
	case UnitID.TONNE_ID:
		return Unit.TONNE
	case UnitID.MILLILITER_ID:
		return Unit.MILLILITER
	case UnitID.AMERICAN_TEASPOON_ID:
		return Unit.AMERICAN_TEASPOON
	case UnitID.AMERICAN_TABLESPOON_ID:
		return Unit.AMERICAN_TABLESPOON
	case UnitID.AMERICAN_LIQUID_OUNCE_ID:
		return Unit.AMERICAN_LIQUID_OUNCE
	case UnitID.GLASS_ID:
		return Unit.GLASS
	case UnitID.AMERICAN_PAINT_ID:
		return Unit.AMERICAN_PAINT
	case UnitID.AMERICAN_LIQUID_QUART_ID:
		return Unit.AMERICAN_LIQUID_QUART
	case UnitID.LITER_ID:
		return Unit.LITER
	case UnitID.AMERICAN_GALLON_ID:
		return Unit.AMERICAN_GALLON
	case UnitID.CUBIC_METER_ID:
		return Unit.CUBIC_METER
	case UnitID.MILLIMETER_ID:
		return Unit.MILLIMETER
	case UnitID.CENTIMETER_ID:
		return Unit.CENTIMETER
	case UnitID.INCH_ID:
		return Unit.INCH
	case UnitID.FOOT_ID:
		return Unit.FOOT
	case UnitID.YARD_ID:
		return Unit.YARD
	case UnitID.METER_ID:
		return Unit.METER
	case UnitID.KILOMETER_ID:
		return Unit.KILOMETER
	case UnitID.MILE_ID:
		return Unit.MILE
	case UnitID.UNIT_ID:
		return 1
	}

	return 1
}