const initialState = {

clientes:[],

access: false







};

const reducer = (state = initialState, action) => {
  switch (action.type) {

     case 'ADD_CLIENT':
      return{
        ...state,
        clientes: [...state.clientes, action.payload]
      } 

    case 'SET_ACCESS':
      return{
        ...state,
        access: action.payload
      }  



    default:
      return {
        ...state,
      };
  }
};

export default reducer;
