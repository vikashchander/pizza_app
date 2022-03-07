import Data from "../constants";

export const requestData = (data) => async (dispatch) => {
  dispatch({
    type: Data.LOAD,
    payload: data,
    
  });
};

export const checkVeg = (data) => async (dispatch) => {
  dispatch({
    type: Data.isVeg,
    payload: data,
  });
};
export const checkNonVeg = (data) => async (dispatch)=>{
    dispatch({
        type:Data.isNonVeg,
        payload: data
    })
}
export const sortPrice = (data) => async (dispatch) => {
  dispatch({
    type: Data.sortData,
    payload: data,
  });
};

