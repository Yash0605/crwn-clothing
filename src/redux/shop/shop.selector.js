import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// this selector is reqd coz we had changed our shop data from array to obj this caused our shop page to breakdown, inorder to fix this we have got the keys from the new obj and then returning its value which was an array and exactly what is reqd for our needs
export const selectCollectionForPreview = createSelector(
  [selectCollection],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollectionFromId = (collectionUrlParam) =>
  createSelector(
    [selectCollection],
    (collections) => collections[collectionUrlParam]
  );
