export const ADDTOCART = "ADDTOCART";
export const REMOVEFROMCART = "REMOVEFROMCART";
export const removeFromCartAction = (payload) => {
    // const action = {
    //   type: ADD_TO_CART,
    //   payload: {
    //     id: 1,
    //   },
    // };
  
    return {
      type: REMOVEFROMCART,
      payload: payload,
    };
  };

  export const addToCart = (payload) => {
    // const action = {
    //   type: ADD_TO_CART,
    //   payload: {
    //     id: 1,
    //   },
    // };
  
    return {
      type: ADDTOCART,
      payload: payload,
    };
  };