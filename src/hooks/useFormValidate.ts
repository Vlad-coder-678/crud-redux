// external imports
import { useEffect, useState } from "react";

// internal imports
// constants
import ERROR_MESSEGES from "constants/error-messeges";
import PRODUCT_SCHEMA from "constants/product-schema";
// models
import { IProductModel } from "models";

interface IProps extends Pick<IProductModel, "title"> {}

const useFormValidate = ({ title }: IProps) => {
  const [titleErrorMessage, setTitleErrorMessage] = useState("");

  useEffect(() => {
    if (title === "") {
      setTitleErrorMessage(ERROR_MESSEGES.noTitle);
    } else if (title.length < PRODUCT_SCHEMA.minTitleLength || title.length > PRODUCT_SCHEMA.maxTitleLength) {
      setTitleErrorMessage(ERROR_MESSEGES.notValidTitle);
    } else {
      setTitleErrorMessage("");
    }
  }, [title]);

  return {
    titleErrorMessage,
    isTitleValid: titleErrorMessage.length === 0,
  };
};

export default useFormValidate;
