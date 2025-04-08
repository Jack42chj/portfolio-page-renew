import React from "react";

import * as S from "./Layout.styled";

interface LayoutBase {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutBase) => {
  return (
    <S.Layout className={className}>
      <S.Column>{children}</S.Column>
    </S.Layout>
  );
};

export default Layout;
