export interface IProduct {
	id: string;
	name: string;
	code: string;
	measurement: ProductMeasurement | '';
	categoryId: string;
	price: number;
	sequence: number;
	category: ICategoryResponse;
	createdAt?: number;
}

export enum ProductMeasurement {
	PIECE = 'piece',
	KG = 'kg',
	METER = 'meter',
	LITER = 'liter'
}

export interface ICategoryResponse {
	id: string;
	name: string;
}

export interface ProductFormValues {
	name: string;
	code: string;
	measurement?: ProductMeasurement | '';
	categoryId: string;
	price?: number;
}

export enum MovingDirection {
	UP = 'up',
	DOWN = 'down'
}
