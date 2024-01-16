import { UnitID } from "./unit-ids"

export enum UnitKind {
    MASS    = 'mg',
    VOLUME  = 'ml',
    LENGTH  = 'mm',
    UNIT    = 'u',
}

export function DefaultUnitIDFromKind(kind: UnitKind): UnitID {
	switch (kind) {
	case UnitKind.MASS:
		return UnitID.MILLIGRAM_ID
	case UnitKind.VOLUME:
		return UnitID.MILLILITER_ID
	case UnitKind.LENGTH:
		return UnitID.MILLIMETER_ID
	}

	return UnitID.UNIT_ID
}