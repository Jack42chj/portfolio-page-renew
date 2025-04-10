import type { FC, SVGProps } from "react";
import React from "react";

import * as S from "./Button.styled";

interface ButtonBase {
  className?: string;
  label: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  handleButtonClick: (e: React.MouseEvent) => void;
}

const Button = ({ className, label, Icon, handleButtonClick }: ButtonBase) => {
  return (
    <S.Button className={className} type="button" onClick={handleButtonClick}>
      {Icon && <Icon />}
      {label && label}
    </S.Button>
  );
};

export default Button;
