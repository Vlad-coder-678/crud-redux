// react/nextjs imports
import React, { FC } from "react";

// local imports
import {
  TooltipArrow,
  TooltipContent,
  TooltipWrapper,
} from "./styles";

interface Props {
  content: string,
  delay?: number,
  isActive: boolean,
  isArrowVisible?: boolean,
  isVisible?: boolean,
  maxWidth?: number,
  onClick: () => void,
  placement?: "top" | "bottom",
}

const TooltipComponent: FC<Props> = ({
  content,
  delay,
  isActive,
  isArrowVisible = false,
  isVisible = true,
  maxWidth = 100,
  onClick,
  placement = "top",
}) => (
  <TooltipWrapper
    delay={delay}
    isActive={isActive}
    maxWidth={maxWidth}
    isVisible={isVisible}
    onClick={onClick}
  >
    <TooltipContent isActive={isActive}>
      {content}
    </TooltipContent>
    <TooltipArrow placement={placement} isArrowVisible={isArrowVisible} />
  </TooltipWrapper>
);

export default TooltipComponent;
