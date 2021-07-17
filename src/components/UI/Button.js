import './Button.css'
const Button = (props) => {
    return <button
        className="btn-default"
        type="submit"
        onClick={props.onClick}>{props.children}</button>
}

export default Button