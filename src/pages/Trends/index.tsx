import { useEffect, useState } from "react";
import BarChart from "../../components/BarChart/BarChart";
import styles from "./style.module.scss";
import SingleBarChartComponent from "../../components/BarChart/BarChartSingle";
import supabase from "../../supabase";

const Trends = () => {
  const [attendance, setAttendance] = useState([{}]);
  const [offetory, setOffetory] = useState([{}]);

  useEffect(() => {
    setGraphvalues();
  }, []);

  const getAttendance = async () => {
    try {
      const resp = await supabase
        .from("attendance")
        .select("date,males,females")
        .order("date", { ascending: true })
        .limit(8);
      return resp.data;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const getOffetory = async () => {
    try {
      const resp = await supabase
        .from("offetory")
        .select("date,welfare,day_born")
        .order("date", { ascending: true })
        .limit(8);
      return resp.data;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const setGraphvalues = async () => {
    const attend = await getAttendance();
    const money = await getOffetory();
    setOffetory(money ?? []);
    setAttendance(attend ?? []);
    setGraphvalues();
  };
  return (
    <div className={styles.container}>
      <img src="./assets/images/Connect.png" alt="logo"></img>
      <div className={styles.chart_container}>
        <BarChart data={attendance} />
        <SingleBarChartComponent data={offetory} />
      </div>
    </div>
  );
};
export default Trends;
