import { createTheme, ThemeProvider } from "@mui/material/styles";
import colors from "../../styles/_export.scss";
import TextField from "@mui/material/TextField";
import { useAppSelector } from "../../store/client/hooks";

interface IInputFieldProps {
  className?: string;
  error?: boolean;
  inputheight?: string;
  lineheight?: string;
  padding?: string;
  textcolor?: string;
  bordercolor?: string;
  borderRadius?: string;
  fontWeight?: string;
  other?: any;
}

const InputField = (props: IInputFieldProps) => {
  const {
    className,
    error,
    inputheight,
    lineheight,
    padding,
    textcolor,
    bordercolor,
    borderRadius,
    fontWeight,
    ...other
  } = props;
  const darkMode = useAppSelector((state) => state.darkMode.value);

  const defaultProps = {
    inputheight: "50px",
    lineheight: "20px",
    padding: "15px",
    textcolor: darkMode ? colors.neutral : colors.neutralLight,
    bordercolor: darkMode ? colors.warning : colors.warningLight,
  };
  const allProps = {
    ...defaultProps,
    inputheight,
    lineheight,
    padding,
    textcolor,
    bordercolor,
    borderRadius,
    fontWeight,
    ...other,
  };

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            height: "auto",
            backgroundColor: darkMode ? colors.base100 : colors.baseLight100,
            color: darkMode ? colors.neutral : colors.neutralLight,
            fontSize: "inherit",
            fontWeight: "inherit",
            borderRadius: allProps.borderRadius ?? "inherit",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: allProps.bordercolor,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline legend": {
              color: darkMode ? colors.warning : colors.warningLight,
            },
          },
          input: {
            padding: allProps.padding ?? "12px",
            fontSize: "inherit",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: darkMode ? colors.neutral : colors.neutralLight,
            fontWeight: allProps.fontWeight ?? "inherit",
            lineHeight: allProps.lineheight ?? "initial",
            fontSize: "inherit",
            "&.Mui-focused": {
              color: darkMode ? colors.warning : colors.warningLight,
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField className={className} error={error} {...other} />
    </ThemeProvider>
  );
};

export default InputField;
