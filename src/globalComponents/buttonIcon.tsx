import IconButton from '@mui/material/IconButton';
interface ButtonIcon {
    icone: React.ReactNode,
    color: "error" | "info" | "inherit" | "primary" | "secondary" | "success" | "warning",
    size: "small" | "medium" | "large",
    disabled: boolean,
    type: "reset" | "button" | "submit"
}
function ButtonIcon({
    icone,
    color,
    size,
    disabled,
    type
}: ButtonIcon) {
    return (
        <IconButton type={type} disabled={disabled} color={color} size={size}>
            {icone}
        </IconButton>
    )
}
export default ButtonIcon