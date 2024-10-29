import { INITIAL_STATE } from ".";
import { ADDTOCART, REMOVEFROMCART } from "./action";

export const reducer = (state = INITIAL_STATE, action) => {
  console.log("updated state", state);
  switch (action.type) {
    case ADDTOCART:
      if (!state.inCart.includes(action.payload)) {
        state.inCart.push(action.payload);
        let tempItem = state.originalList.filter((item) => {
          if (item.id == action.payload) {
            return item;
          }
        });

        state.itemsToRenderInCart.push({ product: tempItem, count: 1 });
      } else {
        let tt = state.itemsToRenderInCart.map((item) => {
          if (item.product[0].id == action.payload) {
            item.count = item.count + 1;
          }
          return item;
        });
        state.itemsToRenderInCart = tt;
      }
      
      // // console.log(tempItem);
      // console.log(state.inCart);
      return { ...state };
    
    default:
      return { ...state };
  }
};
