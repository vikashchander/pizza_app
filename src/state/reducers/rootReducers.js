import Data from "../constants";

const initalState = {
  data: [],
  store: [],
};
const rootReducers = (state = initalState, action) => {
  switch (action.type) {
    case Data.LOAD:
      return {
        ...state,
        data: action.payload,
        store: action.payload,
      };
    case Data.sortData:
      const checker = action.payload;
      console.log(checker);
      let ans = state.data;

      if (checker === "price_down") {
        ans = state.data.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      } else if (checker === "price_up") {
        ans = state.data.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      } else ans = state.data.sort((a, b) => a.id - b.id);
      return {
        ...state,
        data: ans,
      };
    case Data.isVeg:
      const isCheckVeg = action.payload;
      console.log(isCheckVeg + " ---");
      const isVeg = state.data.filter(({ isVeg }) => isVeg !== isCheckVeg);
      const res = !isCheckVeg ? isVeg : state.store;
      return {
        ...state,
        data: res,
      };
    case Data.isNonVeg:
      const checkNonVeg = action.payload;
      console.log(checkNonVeg + " ---");
      const isNonVeg = state.data.filter(({ isVeg }) => isVeg === checkNonVeg);
      const result = !checkNonVeg ? isNonVeg : state.store;
      return {
        ...state,
        data: result,
      };
    default:
      return state;
  }
};
export default rootReducers;
