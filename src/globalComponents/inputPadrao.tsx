import TextField from '@mui/material/TextField';
interface InputPadrao {
    label: string,
    variant: "outlined" | "filled" | "standard",
    id?: string,
    onchange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    value: string,
    color: "error" | "info" | "primary" | "secondary" | "success" | "warning",
    disabled: boolean,
    multiline?: boolean,
    rows?: number,
    size: "small" | "medium"
}
function InputPadrao({
    label,
    variant,
    id,
    onchange,
    value,
    color,
    disabled,
    multiline,
    rows,
    size
}: InputPadrao) {
    return (
        <TextField
            size={size}
            onChange={function (e) {
                onchange(e)
            }}
            color={color}
            fullWidth
            multiline={multiline}
            rows={rows}
            id={id}
            label={label}
            variant={variant}
            value={value}
            disabled={disabled}
        />
    )
}
export default InputPadrao