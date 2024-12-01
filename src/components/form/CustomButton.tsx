import React from "react";
import Button from "@mui/material/Button";

interface ICustomButtonProps {
  height?: string;
  padding?: string;
  fontSize?: string;
  width?: string;
  startIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  other?: any;
}

const CustomButton = (props: ICustomButtonProps) => {
  const { height, padding, width, ...other } = props;

  const defaultProps = {
    height: "50px",
    padding: "15px",
    fontSize: "12px",
    width: "auto",
  };

  const allProps = {
    ...defaultProps,
    height,
    padding,
    width,
    ...other,
  };

  return <Button {...allProps}>{props.children}</Button>;
};

export default CustomButton;
