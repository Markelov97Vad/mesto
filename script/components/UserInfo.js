export default class UserInfo {
  constructor({username, info}){
    this._username = document.querySelector(username);
    this._info = document.querySelector(info);
  }
//  возвращает объект с данными пользователя.
  getUserInfo() {
    const dataUser = {
      username: this._username.textContent,
      info: this._info.textContent
    }
    return dataUser;
  }
// принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(data) {
    this._username.textContent = data.username;
    this._info.textContent = data.info;
  }
}

