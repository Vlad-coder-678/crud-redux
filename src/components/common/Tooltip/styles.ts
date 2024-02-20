// vendor imports
import styled from "styled-components";

const TooltipWrapper = styled.div<{ delay?: number, isActive?: boolean, maxWidth: number, isVisible: boolean }>`
  max-width: ${({ maxWidth }) => maxWidth}%;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  background: transparent;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  pointer-events: none;
  transition: all 300ms ${({ delay }) => delay ?? "0"}s;
  animation: ${({ isActive }) => (isActive ? "blink 1.5s linear infinite" : "none")};

  @keyframes blink {
    50% {
      transform: scale(1.2);
    }
  }
`;

const TooltipContent = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  font-size: ${({ isActive }) => (isActive ? "17px" : "15px")};
  font-weight: ${({ isActive }) => (isActive ? "700" : "500")};
  font-family: sans-serif;
  line-height: 30px;
  color: #222;
  white-space: nowrap;
  cursor: pointer;
  pointer-events: none;
`;

const TooltipArrow = styled.div<{ isArrowVisible: boolean, placement: "top" | "bottom" }>`
  display: ${({ isArrowVisible }) => (isArrowVisible ? "block" : "none")};
  white-space: nowrap;
  cursor: pointer;
  pointer-events: none;
`;

export {
  TooltipArrow,
  TooltipContent,
  TooltipWrapper,
};
