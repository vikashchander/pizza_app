import Data from '../constants';

export const requestData =(data)=> async(dispatch)=>{
    dispatch({
        type:Data.LOAD,
        payload:data
    })
}