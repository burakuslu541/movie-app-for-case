

import { createTheme, ThemeProvider } from '@mui/material/styles';
// import colors from '../../styles/export.scss';
import TextField from '@mui/material/TextField';

interface IInputFieldProps {
    className?: string,
    error?: boolean,
    inputheight?: string,
    lineheight?: string,
    padding?: string,
    textcolor?: string,
    bordercolor?: string,
    borderRadius?: string,
    fontWeight?: string,
    other?: any
}

const InputField = (props: IInputFieldProps) => {
    const { className, error, inputheight, lineheight, padding, textcolor, bordercolor, borderRadius, fontWeight, ...other } = props

    const defaultProps = {
        inputheight: "50px",
        lineheight: "20px",
        padding: "15px",
        // textcolor: colors.neutral,
        // bordercolor: colors.warning
    }
    const allProps = { ...defaultProps, inputheight, lineheight, padding, textcolor, bordercolor, borderRadius, fontWeight, ...other }

    const theme = createTheme({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        height: 'auto',
                        // backgroundColor: colors.base100,    
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        borderRadius: allProps.borderRadius ?? 'inherit',
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: allProps.bordercolor,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline legend': {
                            color: allProps.bordercolor,
                        },
                    },
                    input: {
                        padding: allProps.padding ?? '12px',
                        fontSize: 'inherit',
                    },
                }
            },
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        margin: '0'
                    }
                }
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: allProps.textcolor ?? 'rgba(0, 0, 0, 0.6)',
                        fontWeight: allProps.fontWeight ?? 'inherit',
                        lineHeight: allProps.lineheight ?? 'initial',
                        fontSize: 'inherit',
                        '&.Mui-focused': {
                            color: allProps.bordercolor,
                        }
                    },
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <TextField
                className={className}
                error={error}
                {...other}
            />
        </ThemeProvider>
    )


}


export default InputField;
