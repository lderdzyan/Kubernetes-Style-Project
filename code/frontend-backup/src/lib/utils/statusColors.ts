import { OrderStatus } from '$lib/types/orders';

export const getStatusColor = (status: OrderStatus): string => {
	switch (status) {
		case OrderStatus.DELIVERED:
			return 'text-[#0A993F] text-[10px] bg-[#22C55E33] rounded-lg py-1.5 px-2 font-[600] w-fit';
		case OrderStatus.PRINTED:
			return 'text-[#C93918] text-[10px] bg-[#FF563033] rounded-lg py-1.5 px-2 font-[600] w-fit';
		case OrderStatus.NEW:
			return 'text-[#C87B00] text-[10px] bg-[#FFAB0033] rounded-lg py-1.5 px-2 font-[600] w-fit';
		default:
			return 'text-[#C4CDD5] text-[10px] bg-[#C4CDD533] rounded-lg p-2 font-[500] w-fit';
	}
};
