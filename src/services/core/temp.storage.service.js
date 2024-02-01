export class TempStorageService {
  static setCookie(cname, cvalue, exdays) {
    if (exdays !== undefined) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    } else {
      document.cookie = cname + "=" + cvalue + ";path=/";
    }
  }

  static removeCookie(prop) {
    if (Array.isArray(prop)) {
      prop.forEach((cookie) => {
        if (!cookie.path) cookie.path = "/";
        document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${cookie.path};`;
      });
    } else {
      if (!prop.path) prop.path = "/";
      document.cookie = `${prop.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${prop.path};`;
    }

    return true;
  }
  static getCookie(name) {
    const cookie = document.cookie
      .split(";")
      .filter((cookie) => cookie.includes(`${name}=`))[0];
    if (!cookie) return null;
    const value = cookie.split("=").length > 2 ? cookie : cookie.split("=")[1];

    if (!value) return null;

    if (value[0] === "{") {
      return JSON.parse(value);
    }
    return value;
  }
}
