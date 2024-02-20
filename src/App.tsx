// external imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// internal imports
// store
import { AppDispatch } from "store";
import { productState } from "store/slices/product.slice";
// services
import { fetchProducts } from "services/product-api.service";
// components
import Layout from "components/common/Layout";
import ProductListComponent from "components/product/List";
import CreateProductWidget from "components/product/CreateProductWidget";
import CreateProductModalWrapper from "components/product/CreateProductModalWrapper";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, fetchStatus } = useSelector(productState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout>
      {{
        idle: null,
        pending: "Loading...",
        failed: error,
        succeeded: <ProductListComponent />,
      }[fetchStatus]}

      {/* widgets */}
      <CreateProductWidget />

      {/* modals */}
      <CreateProductModalWrapper />
    </Layout>
  );
};

export default App;
