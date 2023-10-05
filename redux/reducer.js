import { combineReducers } from "@reduxjs/toolkit"

const initialStatePemesan = {
    gelar: 'Mr', 
    nama: 'ccc', 
    email: 't@m.c', 
    telp: '453' 
}

const initialStateTamu = {
   data_tamu : [{
        gelar   : 'Mr',
        nama    : 'ss',
        email   : 'vd',
        telp    : 'sa'  
   }]
}



const reducer_tamu = (state = initialStateTamu,action) => {
    if (action.type === 'ADD_ORANG') {
       
        return {
            ...state,
            data_tamu: [...state.data_tamu, action.inputValue]
        }
    }
    return state
}

const reducer_pemesan = (state = initialStatePemesan, action) => {
   
    return state
}

const reducer = combineReducers({
    reducer_tamu,
    reducer_pemesan
})


export default reducer;