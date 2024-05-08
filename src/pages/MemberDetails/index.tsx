import { Key, useState } from "react";
import styles from "./style.module.scss";
import supabase from "../../supabase";
import { FaTrashCan } from "react-icons/fa6";
import { Bounce, ToastContainer, toast } from "react-toastify";

const MemberDetails = () => {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState([{}]);
  const notify = () =>
    toast.success("Member Deleted", {
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

  const notifyError = () =>
    toast.error("Member does not exist", {
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

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data } = await supabase
        .from("member")
        .select("*")
        .or(
          `first_name.eq.${search},last_name.eq.${search},other_names.eq.${search}`
        );
      console.log(data);
      if (data?.length == 0) {
        notifyError();
      }
      setMembers(data ?? []);
      return data;
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  const deleteMember = async (id: any) => {
    try {
      const { data } = await supabase.from("member").delete().eq("id", id);
      console.log(data);
      notify();
      try {
        const { data } = await supabase
          .from("member")
          .select("*")
          .or(
            `first_name.eq.${search},last_name.eq.${search},other_names.eq.${search}`
          );
        setMembers(data ?? []);
      } catch (e) {
        console.error("Error deleting data:", e);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.searchbar}>
        <input
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
          className={styles.searcharea}
        ></input>
        <button type="submit" className={styles.searchbutton}>
          Search
        </button>
      </form>
      <div className={styles.upcoming}>
        <span className={styles.events_heading}>Members</span>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Other Names</th>
              <th>Date of Birth</th>
              <th>Organisation</th>
              <th>Additional Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member: any, index: Key | null | undefined) => (
              <tr key={index}>
                <td>{member.first_name}</td>
                <td>{member.last_name}</td>
                <td>{member.other_names}</td>
                <td>{member.dob}</td>
                <td>{member.organisation}</td>
                <td>{member.additional_role}</td>
                <td>
                  {search.length == 0 ? (
                    <></>
                  ) : (
                    <button
                      className={styles.trash_button}
                      onClick={() => deleteMember(member.id)}
                    >
                      <FaTrashCan className={styles.trash} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};
export default MemberDetails;
