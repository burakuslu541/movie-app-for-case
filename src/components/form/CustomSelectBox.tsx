import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import colors from "../../styles/_export.scss";
import { useAppSelector } from "../../store/client/hooks";

interface CustomSelectBoxProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (ev: any) => void;
  style?: React.CSSProperties;
}

const CustomSelectBox: React.FC<CustomSelectBoxProps> = ({
  label,
  options,
  value,
  style,
  onChange: onChangeHandler,
}) => {
  const darkMode = useAppSelector((state) => state.darkMode.value);
  return (
    <FormControl fullWidth variant="outlined" style={{ ...style }}>
      <InputLabel
        sx={{
          paddingBottom: "2px",
          color: darkMode ? colors.neutral : colors.neutralLight,
        }}
      >
        {label}
      </InputLabel>
      <Select
        value={value}
        label={label}
        sx={{
          minWidth: "120px",
          height: "47px",
          borderRadius: "12px",
          backgroundColor: darkMode ? colors.base100 : colors.baseLight100,
          color: darkMode ? colors.neutral : colors.neutralLight,
        }}
        onChange={onChangeHandler}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelectBox;
