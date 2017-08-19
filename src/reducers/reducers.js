export const addTodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        action.user
      ];
    default:
      return state;
  }
};

export const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case "ADD_TOKEN":
      return action.token;
    default:
      return state;
  }
};
