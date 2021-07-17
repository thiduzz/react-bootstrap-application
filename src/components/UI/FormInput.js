import './FormInput.scss'
const FormInput = (props) => {
    const name = props.name ? props.name : "name-"+ Math.floor(Math.random() * 10000).toString()
    const type = props.type ? props.type : "text"
    const label = props.label ? props.label : "Label"
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            <input name={name} value={props.value} onChange={props.onChange} type={type}/>
        </div>
    )
};

export default FormInput;