const Button = ({text,color,children}) => {
    return<button style={{
        color: color
    }}>{text}
    {children}</button>
}
export default Button;