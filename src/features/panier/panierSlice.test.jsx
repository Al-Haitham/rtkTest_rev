import {describe,it,expect} from vitest
import panierReducer, {addToPanier,removeFromPanier,incrementQte, decrementQte} from './panierSlice'
describe("panierReducer tests", ()=>{
    it ('should add an item',()=>{
        const initialState={panierItems:[]};
        const action=addToPanier({
            intitule: 'clavier',
            price: 120,
            category: 'informatique'
        });

        const state=panierReducer(initialState,action);

        expect(state.panierItems).toHaveLength(1);
        expect(state.panierItems[0].intitule).toBe('clavier');
        expect(state.panierItems[0].price).toBe(120);
        expect(state.panierItems[0].category).toBe('informatique');
        expect(state.panierItems[0].id).toBeDefined()
    });
    it ('should delete an item',()=>{
        const initialState={
            panierItems:[
                {
                id: '1',
                intitule: 'Ordinateur',
                price: 5000,
                category: 'Informatique'
                },
                {
                id: '2',
                intitule: 'Téléphone',
                price: 3000,
                category: 'Électronique'
                }
            ]
        };
        const action=removeFromPanier('1');
        const state=paneirReducer(initialState,action);
        expect(state.paneirItems).toHaveLength(1);
        expect(state.panierItems[0].intitule).toBe('Téléphone')
    })
})