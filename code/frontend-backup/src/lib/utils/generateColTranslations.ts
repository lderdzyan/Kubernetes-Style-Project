import { OrderStatus } from './../types/orders';
import type { IOrder } from '$lib/types/orders';
import { ProductMeasurement, type IProduct } from '$lib/types/product';
import type { IUser } from '$lib/types/user';

export const selectMeasurement = (measurement?: ProductMeasurement): string => {
	switch (measurement) {
		case ProductMeasurement.PIECE:
			return 'հատ';
		case ProductMeasurement.KG:
			return 'կգ';
		case ProductMeasurement.LITER:
			return 'լիտր';
		case ProductMeasurement.METER:
			return 'մետր';
		default:
			return String(measurement);
	}
};

export const translateStatus = (status: string): string => {
	switch (status) {
		case OrderStatus.NEW:
			return 'Նոր';
		case OrderStatus.DELIVERED:
			return 'Առաքված';
		case OrderStatus.PRINTED:
			return 'Տպված';
		default:
			return 'Ընթացքի մեջ';
	}
};

export const selectRole = (role: string): string => {
	return role === 'admin' ? 'Ադմին' : 'Մենեջեր';
};

export const isUser = (row: IUser | IProduct | IOrder): row is IUser => {
	return 'role' in row;
};

export const isProduct = (row: IUser | IProduct | IOrder): row is IProduct => {
	return 'measurement' in row;
};

export const isOrder = (row: IUser | IProduct | IOrder): row is IOrder => {
	return 'status' in row;
};
export const generateColumnData = (
	row: IUser | IProduct | IOrder,
	columnKey: keyof (IUser & IProduct & IOrder)
) => {
	if (isUser(row) && columnKey === 'role') {
		return selectRole(row.role);
	}

	if (isProduct(row) && columnKey === 'measurement') {
		return selectMeasurement(row.measurement || undefined);
	}

	if (isOrder(row) && columnKey === 'status') {
		return translateStatus(row.status)
	}

	const value = row[columnKey as keyof typeof row];
	return value != null ? String(value) : '';
};

export const translateData = (data: string): string => {
	return data === 'cash' ? 'Կանխիկ' : 'Փոխանցումով';
};
