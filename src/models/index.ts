import { AxiosResponse } from "axios";

export interface IProductModel {
  id: number,
  description: string,
  image: string,
  price: string,
  title: string,
};

export type IFakeApiResponse = Promise<AxiosResponse<IProductModel | IProductModel[]> | string>;

export type IFakeApiFetchResponse = Promise<AxiosResponse<IProductModel | IProductModel[]>>;
