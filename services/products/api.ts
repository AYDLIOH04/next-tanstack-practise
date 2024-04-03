import { axiosInstance } from '../instance';
import { IProduct } from './types';

export class ProductService {
  static async getProducts({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<IProduct[]> {
    const response = await axiosInstance.get(
      `/products?_page=${pageParam + 1}&_limit=4`
    );
    return response.data;
  }

  static async getProduct(id: number): Promise<IProduct> {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  }
}
