import FormComponent from "../../components/FormComponent";
import styles from "./style.module.scss";
const EnterMember = () => {
  return (
    <div className={styles.container}>
      <img src="src\assets\images\Connect.png" alt="logo"></img>
      <div className={styles.form_box}>
        <p className={styles.heading}>Add a New Member to the Family</p>
        <form>
          <FormComponent placeholder="First Name" id="first_name" type="text" />
          <FormComponent placeholder="Last Name" id="last_name" type="text" />
          <FormComponent
            placeholder="Other Names"
            id="other_names"
            type="text"
          />
          <div className={styles.gender}>
            <FormComponent
              placeholder="Male"
              id="male"
              type="radio"
              name="gender"
              value="male"
            />
            <FormComponent
              placeholder="Female"
              id="female"
              type="radio"
              name="gender"
              value="female"
            />
          </div>
          <FormComponent placeholder="Date of Birth" id="date" type="date" />
          <FormComponent
            placeholder="Organisation"
            id="organisation"
            type="text"
          />
          <FormComponent
            placeholder="Additional Role"
            id="additional_role"
            type="text"
          />
          <button>Add Member</button>
        </form>
      </div>
    </div>
  );
};
export default EnterMember;
