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
