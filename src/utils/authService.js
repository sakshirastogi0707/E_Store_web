import { TempStorageService } from "../services/core/temp.storage.service";

export const isAuthenticated = () => {
  return TempStorageService.getCookie("token") !== null;
};
