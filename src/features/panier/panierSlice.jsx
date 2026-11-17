import {createSlice} from '@reduxjs/toolkit';

const initialState={
    panierItems:[]
};

const panierSlice=createSlice({
    name:'panier',
    initialState,
    reducers:{
        addToPanier:(state,action)=>{
            const existItem=state.panierItems.find(item=>item.id===action.payload.id);
            if (existItem){
                state.panierItems=state.panierItems.map(item=>
                    item.id===action.payload.id?item.quantity+=1:item
                );
            }else{
                state.panierItems.push(action.payload);
            }
        },
        removeFromPanier:(state,action)=>{
            state.panierItems=state.panierItems.filter(item=>item!==action.payload)
        },
        incrementQte:(state,action)=>{
            state.panierItems=state.panierItems.map(item=>item.id===action.payload?{...item,quantity:item.quantity+=1}:item)
        },
        decrementQte:(state,action)=>{
            state.panierItems=state.panierItems.map(item=>item.id===action.payload?{...item,quantity:item.quantity-=1}:item).filter(it=>it>0)
        }
    }
})

export const {addToPanier,removeFromPanier,incrementQte, decrementQte} =panierSlice.actions;
export default panierSlice.reducer;
