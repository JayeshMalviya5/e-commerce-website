import { INITIAL_STATE } from ".";
import { ADDTOCART, REMOVEFROMCART } from "./action";

export const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case ADDTOCART:
      const tempCart = state.originalList.filter((e) => {
        if (e.id == action.payload) {
          return e;
        }
      });
      if (!state.itemsToRenderInCart.includes(tempCart[0])) {
        state.itemsToRenderInCart.push(tempCart[0]);
      }
      console.log("added", tempCart);
      return {...state};
    case REMOVEFROMCART:
      const updatedCart = state.itemsToRenderInCart.filter((e) => {
        if (e.id != action.payload) {
          return e;
        }
      });
      state.itemsToRenderInCart = updatedCart;
      console.log("afterremove", state.itemsToRenderInCart);
      return {...state};
    default:
      return state;
  }
};
