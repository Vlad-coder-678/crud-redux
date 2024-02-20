import { IProductModel } from "models";

export interface ProductStateModel {
  error: string | null,
  fetchStatus: "idle" | "pending" | "succeeded" | "failed",
  products: IProductModel[],
}
