export const initialState={
    basket:[],
    user:null
};
//Selector
// export const getBasketTotal=(basket)=>
// basket?.reducer((amount,item)=>item.price+amount, 0);
const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item],
            };
        case 'REMOVE_TO_BASKET':
            return{
                ...state,
                basket:state.basket.filter(item=>item.id!==action.id)
            }
            case'SET_USER':return{...state,user:action.user}
            default:
                return  state;
    }
};
export default reducer;