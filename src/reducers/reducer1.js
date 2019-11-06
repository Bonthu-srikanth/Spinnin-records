
const initialState = {
  books: '',
  chars:''
  };
  
export default (state =initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA': 
      return { books:action.data,chars:action.info}
    default:
      return state;
  }
};

