import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/tr";
import colors from "../../styles/_export.scss";
import { useAppSelector } from "../../store/client/hooks";

dayjs.locale("tr");

interface CustomDatePickerProps {
  label: string;
  value: string;
  onChange: (ev: any) => void;
  maxDate?: string;
}

export default function CustomDatePicker({
  label,
  value,
  onChange,
  maxDate,
}: CustomDatePickerProps) {
  const darkMode = useAppSelector((state) => state.darkMode.value);
  const dateTheme = createTheme({
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            width: "100%",
            label: {
              color: darkMode ? colors.neutral : colors.neutralLight,
              fontSize: "16px !important",
              fontWeight: 500,
              paddingBottom: "18px",
            },

            "& .MuiFormLabel-root.Mui-focused": {
              color: darkMode ? colors.warning : colors.warningLight,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            width: "100%",
            backgroundColor: darkMode ? colors.base100 : colors.baseLight100,
            color: darkMode ? colors.neutral : colors.neutralLight,
            fontSize: "16px",
            height: "47px",
            borderRadius: "12px",
            fontWeight: 400,
            "& .MuiOutlinedInput-notchedOutline": {},
            "& .MuiOutlinedInput-input": {
              padding: "11px 0px 11px 14px",
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: darkMode ? colors.neutral : colors.neutralLight,
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={dateTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          views={["year"]}
          sx={{ width: "350px", height: "47px" }}
          value={dayjs(value)}
          onChange={onChange}
          maxDate={dayjs(maxDate)}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
