import FormComponent from "../../components/FormComponent";
import styles from "./style.module.scss";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const supabaseUrl = import.meta.env.VITE_API_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl ?? "", supabaseKey ?? "");

const DataEntry = () => {
  const notify = (message: string) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
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
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const [formData1, setFormData1] = useState({
    welfare: "",
    day_born: "",
    date: "",
  });

  const [formData2, setFormData2] = useState({
    males: "",
    females: "",
    date: "",
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
      const { data, error } = await supabase.from("offetory").insert([
        {
          welfare: formData1.welfare,
          day_born: convertToJSON(formData1.day_born),
          date: formData1.date,
        },
      ]);

      if (error) {
        throw error;
      }
      console.log("Data inserted successfully:", data);
      notify("Offetory Added");
      setFormData1({
        welfare: "",
        day_born: "",
        date: "",
      });
    } catch (error) {
      console.error("Error inserting data:", error);
      notifyError("Could not add offetory");
    }
  };

  const handleSubmit2 = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("attendance").insert([
        {
          males: formData2.males,
          females: formData2.females,
          date: formData2.date,
        },
      ]);
      if (error) {
        throw error;
      }
      console.log("Data inserted successfully:", data);
      notify("Attendance Added");
      setFormData2({
        males: "",
        females: "",
        date: "",
      });
    } catch (error) {
      console.error("Error inserting data:", error);
      notifyError("Could not add attendance");
    }
  };

  const convertToJSON = (data: any) => {
    const daysOfWeek = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const jsonData: Record<string, number> = {};

    data.split(",").forEach((value: string, index: number) => {
      const day = daysOfWeek[index];
      jsonData[day] = parseInt(value.trim());
    });

    return jsonData;
  };

  return (
    <div className={styles.container}>
      <img src="./assets/images/Connect.png" alt="logo"></img>
      <div className={styles.forms}>
        <div className={styles.form_box}>
          <p className={styles.heading}>Add Offetory</p>
          <form onSubmit={handleSubmit1}>
            <div>
              <FormComponent
                placeholder="Welfare Amount"
                id="welfare_amount"
                name="welfare"
                value={formData1.welfare.toString()}
                onChange={handleChange1}
                required={true}
                type="number"
              />
              <p>*Comma separate the amount per day from Mon to Sun</p>
              <FormComponent
                placeholder="Amount per Day of Week"
                id="days"
                name="day_born"
                value={formData1.day_born.toString()}
                required={true}
                onChange={handleChange1}
                type="text"
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
            </div>
            <button type="submit">Submit Offetory</button>
          </form>
        </div>
        <div className={styles.form_box}>
          <p className={styles.heading}>Add Attendance</p>
          <form onSubmit={handleSubmit2}>
            <div>
              <FormComponent
                placeholder="Males"
                id="male"
                type="number"
                name="males"
                value={formData2.males.toString()}
                onChange={handleChange2}
                required={true}
              />
              <FormComponent
                placeholder="Females"
                id="female"
                type="number"
                name="females"
                value={formData2.females.toString()}
                onChange={handleChange2}
                required={true}
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
            </div>
            <button type="submit">Submit Attendance</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default DataEntry;
