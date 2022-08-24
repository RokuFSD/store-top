interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export type CartState = {
  cartItems: CartItem[];
  total: number;
  ids: { [key: number]: boolean };
};

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_CART_ITEM'; payload: CartItem }
  | { type: 'CLEAR_CART' };

export const initialState: CartState = {
  cartItems: [],
  total: 0,
  ids: {},
};

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        total: state.total + action.payload.price,
        ids: { ...state.ids, [action.payload.id]: true },
      };
    case 'REMOVE_FROM_CART':
      // eslint-disable-next-line no-case-declarations
      const findCartItem = state.cartItems.find((item) => item.id === action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        total: state.total - (findCartItem ? findCartItem.price : 0),
        ids: { ...state.ids, [action.payload]: false },
      };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        total: 0,
        ids: {},
      };
    default:
      return state;
  }
};
