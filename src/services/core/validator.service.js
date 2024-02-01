class ValidatorService {
  static isEmail(email) {
    try {
      const regex_pattern =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex_pattern.test(email);
    } catch (error) {
      return error;
    }
  }
}
export { ValidatorService };
