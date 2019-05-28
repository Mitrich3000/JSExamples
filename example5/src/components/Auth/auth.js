let loggedIn = false;

export default {
  login(login, password) {
    return new Promise((resolve, reject) => {
      if (login === 'test' && password === '123456') {
        loggedIn = true;
        resolve();
      } else {
        reject();
      }
    });
  },
  logout() {
    loggedIn = false;
  },
  isAuthenticated() {
    return loggedIn;
  },
};
