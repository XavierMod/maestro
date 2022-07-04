// eslint-disable-next-line import/no-cycle
import axios from './axios';

export const getBrandProductsById = async (id) => {
  const data = await axios.get(`/brands/${id}/products`);
  try {
    return data.data;
  } catch (err) {
    console.log('[ERR1] - getBrandProductsById', err);
  }
  return null;
};

export const getProductById = async (id) => {
  const data = await axios.get(`/products/${id}`);
  try {
    console.log('returning product', data.data);
    return data.data;
  } catch (err) {
    console.log('[ERR2] - getProductById', err);
  }
  return null;
};

export const getBrandInfo = async () => {
  try {
    const data = await axios.get('brands/me');
    console.log('trying to get brand info', data);
    return data.data;
  } catch (err) {
    console.log('getting error', err.response);
    return 404;
  }
};

export const getAllBrands = async () => {
  try {
    const data = await axios.get('brands');
    return data.data;
  } catch (err) {
    return err.response.status;
  }
};

export const createBrand = async (body) => {
  try {
    const data = await axios.post('brands/me', body);
    return data.data;
  } catch (err) {
    return err.response;
  }
};

export const updateBrand = async (body) => {
  try {
    console.log('[RES] updateBrand', body);
    const data = await axios.put('brands/me', body);
    return data.data;
  } catch (err) {
    return err.response;
  }
};

export const updateBrandImage = async (body) => {
  try {
    const data = await axios.patch('brands/me/image', body);
    console.log('[RES] Getting update brand image', data);
    return data.data;
  } catch (err) {
    console.log('[RES] Sending to brands/me/image', body);
    return err.response;
  }
};

export const updateProductImage = async (productId, bytes) => {
  try {
    const data = await axios.patch(`/products/me/${productId}/image`, {
      image: bytes,
    });
    return data.data;
  } catch (err) {
    return err.response;
  }
};

export const createProduct = async (body) => {
  try {
    const data = await axios.post('products/me', body);
    return data;
  } catch (err) {
    return err.response;
  }
};

export const updateProduct = async (id, body) => {
  try {
    const data = await axios.put(`products/me/${id}`, body);
    console.log('[UPDATEPRODUCT]', data);
    return data;
  } catch (err) {
    return err.response;
  }
};

export const deleteProduct = async (id) => {
  try {
    const data = await axios.delete(`products/me/${id}`);
    return data;
  } catch (err) {
    return err.response;
  }
};

export const getImage = (brandID, imageID, prodID) => {
  console.log(`https://pinfluencer-product-images.s3.eu-west-2.amazonaws.com/${brandID}${prodID ? `/${prodID}` : ''}/${imageID}`);
  return `https://pinfluencer-product-images.s3.eu-west-2.amazonaws.com/${brandID}${prodID ? `/${prodID}` : ''}/${imageID}`;
};

export const getProducts = async (id) => {
  try {
    const data = await axios.get(`products${id ? `/${id}` : '/me'}`);
    console.log('getting prods', data);
    return data.data;
  } catch (err) {
    console.log("[ERR1] - Can't get data", err);
  }
  return true;
};

export const getFeed = async () => {
  console.log('getting feed');
  try {
    const data = await axios.get('feed');
    return data.data;
  } catch (err) {
    console.log("[ERR1] - Can't get data", err);
  }
  return true;
};
