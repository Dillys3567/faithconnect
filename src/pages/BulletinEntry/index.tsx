import FormComponent from "../../components/FormComponent";
import styles from "./style.module.scss";

const BulletinEntry = () => {
  return (
    <div className={styles.container}>
      <img src="src\assets\images\Connect.png" alt="logo"></img>
      <div className={styles.forms}>
        <div className={styles.form_box}>
          <p className={styles.heading}>Add Event</p>
          <form>
            <div>
              <FormComponent placeholder="Theme" id="theme" type="text" />
              <FormComponent placeholder="Attire" id="attire" type="text" />
              <FormComponent
                placeholder="Special Guest"
                id="special_guest"
                type="text"
              />
              <FormComponent placeholder="Date" id="date" type="date" />
              <FormComponent placeholder="Time" id="time" type="time" />
              <FormComponent
                placeholder="Organiser"
                id="organiser"
                type="text"
              />
              <FormComponent
                placeholder="Additional Information"
                id="additional_information"
                type="text"
              />
            </div>
            <button>Add Event</button>
          </form>
        </div>
        <div className={styles.form_box}>
          <p className={styles.heading}>Add Announcement</p>
          <form>
            <div>
              <FormComponent placeholder="Title" id="title" type="text" />
              <FormComponent placeholder="Details" id="details" type="text" />
              <FormComponent
                placeholder="Persons Involved"
                id="persons_involved"
                type="text"
              />
              <FormComponent placeholder="Date" id="date" type="date" />
              <FormComponent placeholder="Time" id="time" type="time" />
            </div>
            <button>Add Announcement</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BulletinEntry;
