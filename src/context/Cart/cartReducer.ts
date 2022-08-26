export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type CartState = {
  cartItems: ICartItem[];
  total: number;
  ids: { [key: string]: boolean };
};

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: ICartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'INCREMENT_CART_ITEM'; payload: string }
  | { type: 'DECREMENT_CART_ITEM'; payload: string }
  | { type: 'MODIFY_CART_ITEM'; payload: { id: string; quantity: number } }
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
        total: state.total - (findCartItem ? findCartItem.price * findCartItem.quantity : 0),
        ids: { ...state.ids, [action.payload]: false },
      };
    case 'INCREMENT_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
        total: state.total + state.cartItems.find((item) => item.id === action.payload)!.price,
      };
    case 'DECREMENT_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
        total: state.total - state.cartItems.find((item) => item.id === action.payload)!.price,
      };
    case 'MODIFY_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),
        total: state.cartItems.reduce((acc, item) => {
          if (item.id === action.payload.id) {
            return acc + item.price * action.payload.quantity;
          }
          return acc + item.price * item.quantity;
        }, 0),
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
