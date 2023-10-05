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
    if (action.type === 'DELETE_DATA') {

        // state.data_tamu = state.data_tamu.splice(action.indeks, 1)
        return {
            ...state,
            data_tamu: state.data_tamu.splice(action.indeks, 1)
        }

        
    }
    if (action.type === 'EDIT_DATA_SUCCESS') {

        // Update the data at the specified index with the new data
        const { index, newData } = action.inputValue;
        const updatedDataArray = [...state.data_tamu];
        updatedDataArray[index] = { ...newData };

        // return {
        //     ...state,
        //     data_tamu: updatedDataArray,
        //     editingIndex: null, // Reset the editingIndex
        // };

        return {
            ...state,
            data_tamu: state.data_tamu.map(
                (data_tamu, i) => i === action.indeks ?  action.inputValue 
                    : data_tamu
            )
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