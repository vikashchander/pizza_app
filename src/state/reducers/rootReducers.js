import Data from "../constants";

const initalState = {
  data: [],
};
const rootReducers = (state = initalState, action) => {
  switch (action.type) {
    case Data.LOAD:
      return {
        ...state,
        data: action.payload,
      };
    case Data.sortData:
      const checker = action.payload;
      console.log(checker);
      let ans = state.data;
      if (checker === "price_down") {
        ans = state.data.price.sort((a, b) => b - a);
      } else if (checker === "price_ups") {
        ans = state.data.price.sort();
      }

      return {
        ...state,
        data: ans,
      };
    case Data.isVeg:
      const checkVeg = action.payload;
      console.log(checkVeg);
      const afterVeg = state.data.filter(({ isVeg }) => isVeg !== checkVeg);
      const resAfterVeg = state.data.filter(({ isVeg }) => isVeg === checkVeg);
      const res = !checkVeg ? afterVeg : [...afterVeg, ...resAfterVeg];
      return {
        ...state,
        data: res,
      };
    case Data.isNonVeg:
      const checkNonVeg = action.payload;
      console.log(checkNonVeg + " ---");
      const afterNonVeg = state.data.filter(
        ({ isVeg }) => isVeg !== checkNonVeg
      );
      const resNonVeg = state.data.filter(({ isVeg }) => isVeg === checkNonVeg);
      const result = !checkNonVeg ? resNonVeg : [...afterNonVeg, ...resNonVeg];
      return {
        ...state,
        data: result,
      };
    default:
      return state;
  }
};
export default rootReducers;
