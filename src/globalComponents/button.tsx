import Button from '@mui/material/Button'
interface ButtonComponente {
    variant: "text" | "contained" | "outlined",
    texto: string,
    disabled: boolean,
    size: "small" | "medium" | "large"
    icone: React.ReactNode,
    color: "error" | "info" | "inherit" | "primary" | "secondary" | "success" | "warning"
    style?: React.CSSProperties
}
function ButtonComponente({
    variant,
    texto,
    disabled,
    size,
    icone,
    color,
    style
}: ButtonComponente) {
    return (
        <Button style={style} color={color} disabled={disabled} size={size} variant={variant} startIcon={icone}>
            {texto}
        </Button>
    )
}
export default ButtonComponente