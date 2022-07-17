const Button = ({customClass = '', text='', onClick=()=>{}}) => (
    <div className={`button-container ${customClass}`} onClick={onClick}>
        {text || 'button'}
    </div>
)

export default Button