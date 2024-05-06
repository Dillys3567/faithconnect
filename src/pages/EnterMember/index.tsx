import { useState } from "react";
import FormComponent from "../../components/FormComponent";
import styles from "./style.module.scss";
import { createClient } from "@supabase/supabase-js";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const supabaseUrl = import.meta.env.VITE_API_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl ?? "", supabaseKey ?? "");

const EnterMember = () => {
  const notify = () =>
    toast.success("New Member Added", {
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
  const notifyError = () =>
    toast.error("Could not add new Member", {
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

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    other_names: "",
    gender: "",
    dob: "",
    organisation: "",
    additional_role: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRadioChange = (val: string) => {
    setFormData((prevData) => ({
      ...prevData,
      ["gender"]: val,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("member").insert([
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          other_names: formData.other_names,
          gender: formData.gender,
          dob: formData.dob,
          organisation: formData.organisation,
          additional_role: formData.additional_role,
        },
      ]);

      if (error) {
        throw error;
      }
      console.log("Data inserted successfully:", data);
      notify();
      setFormData({
        first_name: "",
        last_name: "",
        other_names: "",
        gender: "",
        dob: "",
        organisation: "",
        additional_role: "",
      });
    } catch (error) {
      console.error("Error inserting data:", error);
      notifyError();
    }
  };

  return (
    <div className={styles.container}>
      <img src="..\src\assets\images\Connect.png" alt="logo"></img>
      <div className={styles.form_box}>
        <p className={styles.heading}>Add a New Member to the Family</p>
        <form onSubmit={handleSubmit}>
          <FormComponent
            placeholder="First Name"
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            required={true}
          />
          <FormComponent
            placeholder="Last Name"
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            required={true}
          />
          <FormComponent
            placeholder="Other Names"
            id="other_names"
            name="other_names"
            type="text"
            value={formData.other_names}
            onChange={handleChange}
          />
          <div className={styles.gender}>
            <FormComponent
              placeholder="Male"
              id="male"
              type="radio"
              name="gender"
              value="male"
              onChange={() => {
                handleRadioChange("male");
              }}
            />
            <FormComponent
              placeholder="Female"
              id="female"
              type="radio"
              name="gender"
              value="female"
              onChange={() => {
                handleRadioChange("female");
              }}
            />
          </div>
          <FormComponent
            placeholder="Date of Birth"
            id="date"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required={true}
          />
          <FormComponent
            placeholder="Organisation"
            id="organisation"
            name="organisation"
            type="text"
            value={formData.organisation}
            onChange={handleChange}
          />
          <FormComponent
            placeholder="Additional Role"
            id="additional_role"
            name="additional_role"
            type="text"
            value={formData.additional_role}
            onChange={handleChange}
          />
          <button type="submit">Add Member</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
export default EnterMember;
