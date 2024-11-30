import React from "react";
import Button from "@mui/material/Button";
// import colors from "../../styles/_export.scss";

interface ICustomButtonProps {
  heightSize?: string;
  paddingSize?: string;
  backgroundColor?: string;
  textTransform?: string;
  textColor?: string;
  borderRadius?: string;
  fontSize?: string;
  widthSize?: string;
  startIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  other?: any;
}

const CustomButton = (props: ICustomButtonProps) => {
  const {
    heightSize,
    paddingSize,
    backgroundColor,
    textTransform,
    textColor,
    borderRadius,
    fontSize,
    widthSize,
    ...other
  } = props;

  const defaultProps = {
    heightSize: "50px",
    paddingSize: "15px",
    backgroundColor: "#314469",
    textTransform: "uppercase",
    textColor: "#fff",
    borderRadius: "12px",
    fontSize: "12px",
    widthSize: "auto",
  };

  const allProps = {
    ...defaultProps,
    heightSize,
    paddingSize,
    backgroundColor,
    textTransform,
    textColor,
    borderRadius,
    fontSize,
    widthSize,
    ...other,
  };

  return <Button {...allProps}>{props.children}</Button>;
};

export default CustomButton;
