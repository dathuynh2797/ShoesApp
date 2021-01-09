import * as ProductTypes from '../constaint/ProductTypes';

export const getAllCategorySuccess = (respone) => ({
  type: ProductTypes.GET_ALL_CATEGORY_SUCCESS,
  payload: respone,
});

export const getProductByCategorySuccess = (respone) => ({
  type: ProductTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS,
  payload: respone,
});
export const getProductByIdSuccess = (respone) => ({
  type: ProductTypes.GET_PRODUCT_BY_ID_SUCCESS,
  payload: respone,
});

export const getProductBestSell = (respone) => ({
  type: ProductTypes.GET_PRODUCT_BEST_SELL_SUCCESS,
  payload: respone,
});
