import React from "react";

import * as S from "./Layout.styled";

interface LayoutBase {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutBase) => {
  return <S.Layout className={className}>{children}</S.Layout>;
};

export default Layout;
