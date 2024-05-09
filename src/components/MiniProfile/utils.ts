export const idFromLocalStorage = () => {
  const userString = localStorage.getItem('user');
  if (userString) {
    const user = JSON.parse(userString);
    const userId = user.userId;
    return userId;
  } else {
    return '';
  }
};

export const getTokenFromLocalStorage = () => {
  const userString = localStorage.getItem('user');
  if (userString) {
    const user = JSON.parse(userString);
    const usertoken = user.token;
    return usertoken;
  } else {
    return '';
  }
};
