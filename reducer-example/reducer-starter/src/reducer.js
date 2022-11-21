export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
        return{...state, loading:true};     
    case "SUCCESS":
        return{...state, catImage:action.payload,error:"", loading:true};  
    case "FAIL":
        return{...state,error:action.payload, loading:true};  
    default:
      break;
  }
};
