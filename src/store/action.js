export const ADDTOCART = "ADDTOCART";
export const REMOVEFROMCART = "REMOVEFROMCART";
export const removeFromCartAction = (payload) => {
  return {
    type: REMOVEFROMCART,
    payload: payload,
  };
};

export const addToCart = (payload) => {
  return {
    type: ADDTOCART,
    payload: payload,
  };
};
