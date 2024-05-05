import { useState } from "react";
import AreaChartComponent from "../../components/AreaChart/AreaChart";
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";
import SummaryCard from "../../components/SummaryCard";
import styles from "./style.module.scss";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_API_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl ?? "", supabaseKey ?? "");

const Dashboard = () => {
  const [membersNum, setMembersNum] = useState(0);
  const [malesNum, setMalesNum] = useState(0);
  const [femalesNum, setFemalesNum] = useState(0);
  const getNumbersOfMembers = async () => {
    try {
      const data = await supabase
        .from("member")
        .select("*", { count: "exact" });
      console.log(data["count"]);
      return data["count"];
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const fetchDataAndSetMembersNum = async () => {
    try {
      const membersNum = await getNumbersOfMembers();
      setMembersNum(membersNum ?? 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchDataAndSetMembersNum();
  return (
    <div className={styles.container}>
      <img
        src="src\assets\images\Connect.png"
        alt="logo"
        className={styles.big_logo}
      ></img>
      <div className={styles.summary_cards}>
        <SummaryCard
          text="Total Members"
          number={membersNum.toString()}
          type="people"
        />
        <SummaryCard text="Total Male" number="10" type="male" />
        <SummaryCard text="Total Female" number="10" type="female" />
      </div>
      <div className={styles.upcoming}>
        <span className={styles.events_heading}>Upcoming Events</span>
        <table>
          <tr>
            <th>Date</th>
            <th>Theme</th>
            <th>Attire</th>
            <th>Organiser</th>
          </tr>
          <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
        </table>
      </div>
      {/* <div className={styles.graph_group}>
        <div className={styles.graph}>
          <AreaChartComponent />
        </div>
        <div className={styles.graph}>
          <BarChart />
        </div>
        <div className={styles.graph}>
          <LineChart />
        </div>
      </div> */}
    </div>
  );
};
export default Dashboard;
