import { useState, useEffect } from "react";
import AreaChartComponent from "../../components/AreaChart/AreaChart";
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";
import styles from "./style.module.scss";
import { createClient } from "@supabase/supabase-js";
import SingleBarChartComponent from "../../components/BarChart/BarChartSingle";

const supabaseUrl = import.meta.env.VITE_API_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl ?? "", supabaseKey ?? "");

const Trends = () => {
  const [attendance, setAttendance] = useState([{}]);
  const [offetory, setOffetory] = useState([{}]);

  const getAttendance = async () => {
    try {
      const resp = await supabase
        .from("attendance")
        .select("date,males,females")
        .order("date", { ascending: true })
        .limit(8);
      console.log(resp.data);
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
      console.log(resp.data);
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
    console.log(attendance);
  };
  setGraphvalues();
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
