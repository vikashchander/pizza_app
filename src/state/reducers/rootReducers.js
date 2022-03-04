import Data from '../constants';

const initalState={
    data:[]
}
 const rootReducers= (state =initalState,action)=>{
    switch(action.type){
        case Data.LOAD:
            console.log(action)
            return{
                ...state,
                 data: action.payload    
            };
        default:
            return state;
        
    }
}
export default rootReducers;