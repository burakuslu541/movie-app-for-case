import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface CustomSelectBoxProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  style?: React.CSSProperties;
}

const CustomSelectBox: React.FC<CustomSelectBoxProps> = ({
  label,
  options,
  value,
  style,
  onChange: onChangeHandler,
}) => {
  return (
    <FormControl
      fullWidth
      variant="outlined"
      style={{ marginBottom: "1rem", ...style }}
    >
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label}>
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
