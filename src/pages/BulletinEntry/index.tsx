import FormComponent from "../../components/FormComponent";
import styles from "./style.module.scss";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import supabase from "../../supabase";

const BulletinEntry = () => {
  const notify = (message: string) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const notifyError = (message: string) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const [formData1, setFormData1] = useState({
    date: "",
    time: "",
    organiser: "",
    special_guest: "",
    attire: "",
    theme: "",
    additional_information: "",
  });

  const [formData2, setFormData2] = useState({
    title: "",
    details: "",
    date: "",
    time: "",
    persons_involved: "",
  });

  const handleChange1 = (event: { target: { name: any; value: any } }) => {
    setFormData1((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChange2 = (event: { target: { name: any; value: any } }) => {
    setFormData2((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit1 = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("event").insert([
        {
          date: formData1.date,
          time: formData1.time,
          organiser: formData1.organiser,
          special_guest: formData1.special_guest,
          attire: formData1.attire,
          theme: formData1.theme,
          additional_information: formData1.additional_information,
        },
      ]);

      if (error) {
        throw error;
      }
      console.log("Data inserted successfully:", data);
      notify("Event Addded");
      setFormData1({
        date: "",
        time: "",
        organiser: "",
        special_guest: "",
        attire: "",
        theme: "",
        additional_information: "",
      });
    } catch (error) {
      console.error("Error inserting data:", error);
      notifyError("Could not add event");
    }
  };

  const handleSubmit2 = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("announcement").insert([
        {
          title: formData2.title,
          details: formData2.details,
          date: formData2.date,
          time: formData2.time,
          persons_involved: formData2.persons_involved,
        },
      ]);

      if (error) {
        throw error;
      }
      console.log("Data inserted successfully:", data);
      notify("Announcement Addded");
      setFormData2({
        title: "",
        details: "",
        date: "",
        time: "",
        persons_involved: "",
      });
    } catch (error) {
      console.error("Error inserting data:", error);
      notifyError("Could not add announcement");
    }
  };

  return (
    <div className={styles.container}>
      <img src="./assets/images/Connect.png" alt="logo"></img>
      <div className={styles.forms}>
        <div className={styles.form_box}>
          <p className={styles.heading}>Add Event</p>
          <form onSubmit={handleSubmit1}>
            <div>
              <FormComponent
                placeholder="Theme"
                id="theme"
                type="text"
                name="theme"
                value={formData1.theme}
                onChange={handleChange1}
                required
              />
              <FormComponent
                placeholder="Attire"
                id="attire"
                type="text"
                name="attire"
                value={formData1.attire}
                onChange={handleChange1}
              />
              <FormComponent
                placeholder="Special Guest"
                id="special_guest"
                type="text"
                name="special_guest"
                value={formData1.special_guest}
                onChange={handleChange1}
              />
              <FormComponent
                placeholder="Date"
                id="date"
                type="date"
                name="date"
                value={formData1.date}
                onChange={handleChange1}
                required={true}
              />
              <FormComponent
                placeholder="Time"
                id="time"
                type="time"
                name="time"
                value={formData1.time}
                onChange={handleChange1}
                required={true}
              />
              <FormComponent
                placeholder="Organiser"
                id="organiser"
                type="text"
                name="organiser"
                value={formData1.organiser}
                onChange={handleChange1}
              />
              <FormComponent
                placeholder="Additional Information"
                id="additional_information"
                type="text"
                name="additional_information"
                value={formData1.additional_information}
                onChange={handleChange1}
              />
            </div>
            <button type="submit">Add Event</button>
          </form>
        </div>
        <div className={styles.form_box}>
          <p className={styles.heading}>Add Announcement</p>
          <form onSubmit={handleSubmit2}>
            <div>
              <FormComponent
                placeholder="Title"
                id="title"
                type="text"
                name="title"
                value={formData2.title}
                onChange={handleChange2}
                required={true}
              />
              <FormComponent
                placeholder="Details"
                id="details"
                type="text"
                name="details"
                value={formData2.details}
                onChange={handleChange2}
              />
              <FormComponent
                placeholder="Persons Involved"
                id="persons_involved"
                type="text"
                name="persons_involved"
                value={formData2.persons_involved}
                onChange={handleChange2}
              />
              <FormComponent
                placeholder="Date"
                id="date"
                type="date"
                name="date"
                value={formData2.date}
                onChange={handleChange2}
                required={true}
              />
              <FormComponent
                placeholder="Time"
                id="time"
                type="time"
                name="time"
                value={formData2.time}
                onChange={handleChange2}
                required={true}
              />
            </div>
            <button type="submit">Add Announcement</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default BulletinEntry;
