

export const Input = ({ label, register, required, value, onChange}) => {
      
    return  <>
        <label>{label}</label>
        <input type="text" value={value} required={required} onChange={onChange} {...register(label, { required })} />
    </>
   
};
