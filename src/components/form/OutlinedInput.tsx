import InputField from "./InputField";

const OutlinedInput = (props: any) => {
    const inputProps = {
        fullWidth: true,
        variant: "outlined",
        textmargin: "10px 0",
    }

    return (
        <InputField {...inputProps} {...props} />
    )
}

export default OutlinedInput;
