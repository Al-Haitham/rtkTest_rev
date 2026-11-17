import {createSlice} from "@reduxjs/toolkit";

const initialState={
    produits:[
        {id:1, intitule:"Prod01", prix:120, categorie:"catg01", image:"https://picsum.photos/200/300?random=1", quantity:1},
        {id:2, intitule:"Prod02", prix:150, categorie:"catg02", image:"https://picsum.photos/200/300?random=2", quantity:1},
        {id:3, intitule:"Prod03", prix:200, categorie:"catg01", image:"https://picsum.photos/200/300?random=3", quantity:1},
        {id:4, intitule:"Prod04", prix:250, categorie:"catg03", image:"https://picsum.photos/200/300?random=4", quantity:1},
        {id:5, intitule:"Prod05", prix:300, categorie:"catg02", image:"https://picsum.photos/200/300?random=5", quantity:1},
        {id:6, intitule:"Prod06", prix:350, categorie:"catg01", image:"https://picsum.photos/200/300?random=6", quantity:1},
    ]
};

const produitSlice=createSlice({
    name:'produits',
    initialState,
    reducers:{
        addProduit:(state,action)=>{
            state.produits.push({...action.payload,id:nanoid()});
        },
        removeProduit:(state,action)=>{
            state.produits=state.produits.filter(p=>p.id!==action.payload);
        },
        searchProduits:(state,action)=>{
            state.produits=state.produits.filter(p=>p.intitule.toLowerCase().includes(action.payload.toLowerCase()));
        },
        filterProduits:(state,action)=>{
            state.produits=state.produits.filter(p=>p.categorie===action.payload);
        },
        updateProduit:(state,action)=>{
            const index=state.produits.findIndex(p=>p.id===action.payload.id);
            if (index!==-1){
                state.produits[index]=action.payload;
            }
        }
    }
})

export const {addProduit, removeProduit, searchProduits, filterProduits, updateProduit}=produitSlice.actions;
export default produitSlice.reducer;