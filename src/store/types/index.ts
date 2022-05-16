export interface CounterState {
	value: number;
}

export interface ShoppingState {
	products: IProduct[];
	cart: IProduct[];
}

export interface IProduct {
	id: number;
	name: string;
	price: number;
	quantity?: number;
}
