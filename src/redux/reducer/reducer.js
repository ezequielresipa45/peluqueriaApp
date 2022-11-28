const initialState = {

clientes:[]









};

const reducer = (state = initialState, action) => {
  switch (action.type) {

     case 'ADD_CLIENT':
      return{
        ...state,
        clientes: [...state.clientes, action.payload]
      } 



    default:
      return {
        ...state,
      };
  }
};

export default reducer;
