class UserInfo {
  constructor({userName, userInfo}){
    this._userName = document.querySelector(userName);
    this._userInfo = document.querySelector(userInfo);
  }

  getUserInfo() {
    const dataUser = {
      name: this._userName.textContent,
      info: this._userInfo.textContent
    }
    return dataUser;
  }

  setUserInfo() {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.job;
  }
}
