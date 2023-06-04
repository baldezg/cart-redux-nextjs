import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<Item>) => {
        const itemExists = state.items.find((item) => item.id === action.payload.id);
        if (itemExists) {
          itemExists.quantity++;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
      },
      incrementQuantity: (state, action: PayloadAction<string>) => {
        const item = state.items.find((item) => item.id === action.payload);
        if (item) {
          item.quantity++;
        } else {
          console.warn(`Item with id ${action.payload} not found in cart`);
        }
      },
decrementQuantity: (state, action: PayloadAction<string>) => {
        const item = state.items.find((item) => item.id === action.payload);
        if (item) {
          if (item.quantity === 1) {
            const index = state.items.findIndex((item) => item.id === action.payload);
            state.items.splice(index, 1);
          } else {
            item.quantity--;
          }
        } else {
          console.warn(`Item with id ${action.payload} not found in cart`);
        }
      },

      removeFromCart: (state, action: PayloadAction<string>) => {
        const index = state.items.findIndex((item) => item.id === action.payload);
        state.items.splice(index, 1);
      },
    },
  });
  
export const cartReducer = cartSlice.reducer;
  
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = cartSlice.actions;
