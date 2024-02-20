// external imports
import { FC, useState } from "react";

// internal imports
// constants
import { DECRIPTION_MAX_LENGTH } from "constants/common";
import { Button } from "./styled";

interface Prop {
  text: string;
  maxLength?: number;
}

const Description: FC<Prop> = ({ text, maxLength = DECRIPTION_MAX_LENGTH }) => {
  const isTextLong = text.length > maxLength;
  const [isShowFullDescription, setIsShowFullDescription] = useState(false);

  if (!isTextLong) {
    return (
      <div>
        {text}
      </div>
    );
  }

  const croppedText = text.substring(0, maxLength);
  const handleClick = () => {
    setIsShowFullDescription(prevState => !prevState);
  };

  return (
    <div>
      <p>
        {isShowFullDescription ? text : `${croppedText}...`}
      </p>
      <Button type="button" onClick={handleClick}>
        {isShowFullDescription ? "Hide Details" : "Show Details"}
      </Button>
    </div>
  );
};

export default Description;
