export interface IShop {
	id: string;
	name: string;
	code: string;
	address: string;
	status: boolean;
	vat: string;
	phone: string;
	managerId: string;
	createdAt: string;
}

export interface IShopInputValues {
	name: string;
	code: string;
	address: string;
	status: boolean;
	vat?: string;
	phone?: string;
	managerId?: string;
	createdAt?: string;
}

export interface ValidateShopInputs {
	name: string;
	code: string;
	address: string;
	status: boolean;
}
