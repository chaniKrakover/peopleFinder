const initState = {
  favorite:JSON.parse(localStorage.getItem("favoriteUsers")||"[]")
}

export const usersReducer = function (state =initState ,action) {
  switch (action.type) {
    case "SET_FEVORITE_USERS":
      return {...state,favorite:action.payload.favorite};
    default:
      return state;
  }
};