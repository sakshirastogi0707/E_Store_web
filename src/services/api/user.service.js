import { login,logout } from "../core/service.config";
import { baseUrl } from "../core/service.config";
import HTTP from "../core/HTTPS.service";

// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }
export class UserService {
  static async login(reqParams) {
    try {
      const result = await HTTP.post(`${baseUrl}${login}`, reqParams, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.status === 200) {
        return result;
      }
      return undefined;
    } catch (error) {
      return error;
    }
  }

  static async logout(reqParams) {
    try {
      const result = await HTTP.post(`${baseUrl}${logout}`,{}, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.status === 200) {
        return result;
      }
      return undefined;
    } catch (error) {
      return error;
    }
  }
}
