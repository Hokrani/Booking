// 2. create user reducer function
export const authReducer = (state = { name: "Hoks", role: "Seller" }, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload }
    case "LOGOUT":
      return action.payloadl
    default:
      return state;
  }
};