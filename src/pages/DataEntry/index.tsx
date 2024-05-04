import FormComponent from "../../components/FormComponent";
import styles from "./style.module.scss";

const DataEntry = () => {
  return (
    <div className={styles.container}>
      <img src="src\assets\images\Connect.png" alt="logo"></img>
      <div className={styles.forms}>
        <div className={styles.form_box}>
          <p className={styles.heading}>Add Offetory</p>
          <form>
            <div>
              <FormComponent
                placeholder="Welfare Amount"
                id="welfare_amount"
                type="number"
              />
              <p>*Comma separate the amount per day from Mon to Sun</p>
              <FormComponent
                placeholder="Amount per Day of Week"
                id="days"
                type="text"
              />
              <FormComponent placeholder="Date" id="date" type="date" />
            </div>
            <button>Submit Offetory</button>
          </form>
        </div>
        <div className={styles.form_box}>
          <p className={styles.heading}>Add Attendance</p>
          <form>
            <div>
              <FormComponent placeholder="Male" id="male" type="number" />
              <FormComponent placeholder="Female" id="female" type="number" />

              <FormComponent placeholder="Date" id="date" type="date" />
            </div>
            <button>Submit Attendance</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DataEntry;
