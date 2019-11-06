
const initialState = {
  dataJson: {}
 
  };
export default (state =initialState, action) => {
  console.log(action);
    switch (action.type) {
     
  case 'favData':
  return {dataJson:action.favData}
  
      default:
        return state;
    }
  };
  
  


