import {configureStore} from '@reduxjs/toolkit';
import produitSlice from './features/produits/produitSlice';
import panierSlice from './features/panier/paneirSlice';

const store=configureStore({
    reducer:{
        produits: produitSlice,
        panierItems: panierSlice,
    }
})
