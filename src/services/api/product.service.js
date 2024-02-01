import {
  baseUrl2,
  getProduct,
  getProductById,
  addToCart,
  removeFromCart,
  updateCart,
} from "../core/service.config";
import HTTP from "../core/HTTPS.service";

export class ProductService {
  static async getAllProduct() {
    try {
      const result = await HTTP.get(`${baseUrl2}${getProduct}`);

      if (result.status === 200) {
        return result;
      }
      return undefined;
    } catch (error) {
      return error;
    }
  }

  static async getAllProductById(id) {
    try {
      const result = await HTTP.get(`${baseUrl2}${getProductById(id)}`);

      if (result.status === 200) {
        return result;
      }
      return undefined;
    } catch (error) {
      return error;
    }
  }

  static async addToCart(reqParams) {
    try {
      const result = await HTTP.post(`${baseUrl2}${addToCart}`, reqParams, {
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

  static async getAllcartProducts(reqParams) {
    try {
      const result = await HTTP.post(`${baseUrl2}${addToCart}`, reqParams, {
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
  static async removeFromCart(id) {
    try {
      const result = await HTTP.delete(`${baseUrl2}${removeFromCart(id)}`);

      if (result.status === 200) {
        return result;
      }
      return undefined;
    } catch (error) {
      return error;
    }
  }
  static async updateCartItemQuantity(id,reqParams) {
    try {
      const result = await HTTP.put(`${baseUrl2}${updateCart(id)}`, {
        reqParams,
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
