import styles from "./style.module.scss";
interface Props {
  placeholder?: string;
  id: string;
  type: string;
  name?: string;
  value?: string;
  required?: boolean;
  onChange?: (field: any) => void;
}
const FormComponent: React.FC<Props> = ({
  placeholder,
  id,
  type,
  name,
  value,
  required,
  onChange,
}) => {
  return (
    <div className={type == "radio" ? styles.radio : styles.container}>
      <label htmlFor={id}>{placeholder}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      ></input>
      {type == "radio" ? <span className={styles.custom_radio}></span> : <></>}
      <br></br>
    </div>
  );
};
export default FormComponent;
