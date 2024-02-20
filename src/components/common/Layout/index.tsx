// external imports
import React, { FC, ReactNode } from "react";

// internal imports
// styles
import { Container } from "./styles";

interface Props {
  children: ReactNode,
}

const Layout: FC<Props> = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Layout;
