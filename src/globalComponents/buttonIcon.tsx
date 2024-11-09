import IconButton from '@mui/material/IconButton';
interface ButtonIcon {
    icone: React.ReactNode,
    color: "error" | "info" | "inherit" | "primary" | "secondary" | "success" | "warning",
    size: "small" | "medium" | "large",
    disabled: boolean
}
function ButtonIcon({
    icone,
    color,
    size,
    disabled
}: ButtonIcon) {
    return (
        <IconButton disabled={disabled} color={color} size={size}>
            {icone}
        </IconButton>
    )
}
export default ButtonIcon