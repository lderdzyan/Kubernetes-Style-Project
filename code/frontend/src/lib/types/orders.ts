import type { ProductMeasurement } from './product';

export interface IOrder {
	id: string;
	orderNumber: string;
	shopName: string;
	shopAddress: string;
	managerName: string;
	managerId: string;
	totalAmount: number;
	status: OrderStatus;
	createdAt: string;
}

export enum OrderStatus {
	NEW = 'New',
	PRINTED = 'Printed',
	DELIVERED = 'Delivered'
}

export interface INewOrder {
	shopId: string;
	items: IOrderingItem[];
	notes?: string;
	status?: OrderStatus;
}

export interface IOrderDetails {
	id: string;
	orderNumber: string;
	shopId: string;
	shopName: string;
	shopAddress: string;
	managerId: string;
	managerName: string;
	items: IOrderingItem[];
	totalAmount: number;
	status: OrderStatus;
	notes: string;
	createdAt: string;
}

export interface IOrderingItem {
	productId: string;
	productName?: string;
	productCode?: string;
	measurement?: ProductMeasurement;
	quantity: number;
	price?: number;
	total?: number;
	originalPrice?: number;
}

export interface IOrderUpdateResponse {
	message: string;
}

export interface ICreateOrderResponse {
	id: string;
}

export interface IOrderDraft extends INewOrder {
	categoryId: string | null;
}

export interface IOrderWithCategory extends IOrder {
	categoryId: string | null;
	categoryName: string | null;
}
