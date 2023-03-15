import './button.styles.scss'
 const BUTTON_TYPES={
    google: 'google-sign-in',
    inverted: 'inverted',

 }



 const Button=({buttonType,children,...otherProps})=>{

    return <button className={`button-container ${BUTTON_TYPES[buttonType]}`}  {...otherProps}>
                    {children}
                   
        </button>
}
export default Button;