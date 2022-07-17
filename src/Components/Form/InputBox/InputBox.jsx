const InputBox = (name='', onChange=()=>{}, customClass='') => (
    <input name={name} onChange={onChange} className={customClass} />
)

export default InputBox;