export const addUser = user => {
  return {
    type: 'ADD_USER',
    user
  };
};

export const addToken = token => {
  return {
    type: 'ADD_TOKEN',
    token
  };
};
