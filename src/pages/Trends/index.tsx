import { Key, useState, useEffect } from "react";
import AreaChartComponent from "../../components/AreaChart/AreaChart";
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";
import SummaryCard from "../../components/SummaryCard";
import styles from "./style.module.scss";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_API_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl ?? "", supabaseKey ?? "");

const Trends = () => {
  const [members, setMembers] = useState([{}]);
  const [malesNum, setMalesNum] = useState(0);
  const [femalesNum, setFemalesNum] = useState(0);
  const [events, setEvents] = useState([{}]);
  const [announcements, setAnnouncements] = useState([{}]);

  useEffect(() => {
    fetchDataAndSetMembersNum();
    fetchEventsAndAnnouncements();
  }, []);

  const getMembers = async () => {
    try {
      const data = await supabase
        .from("member")
        .select("organisation,gender,count(*) as count");
      console.log(data["data"]);
      return data["data"];
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const getNumberOfMales = async () => {
    try {
      const data = await supabase
        .from("member")
        .select("*", { count: "exact" })
        .in("gender", ["Male", "male"]);
      return data["count"];
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const getNumberOfFemales = async () => {
    try {
      const data = await supabase
        .from("member")
        .select("*", { count: "exact" })
        .in("gender", ["female", "Female"]);
      return data["count"];
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const getEvents = async () => {
    try {
      const resp = await supabase
        .from("event")
        .select("date,theme,time,organiser")
        .order("date", { ascending: true })
        .limit(10);
      return resp.data;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const getAnnouncements = async () => {
    try {
      const resp = await supabase
        .from("announcement")
        .select("date,title,time,persons_involved")
        .order("date", { ascending: true })
        .limit(10);
      console.log(resp.data);
      return resp.data;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const fetchDataAndSetMembersNum = async () => {
    try {
      const members = await getMembers();
      const males = await getNumberOfMales();
      const females = await getNumberOfFemales();
      setMembers(members ?? []);
      setMalesNum(males ?? 0);
      setFemalesNum(females ?? 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchEventsAndAnnouncements = async () => {
    try {
      const events = await getEvents();
      const announcements = await getAnnouncements();
      setEvents(events ?? []);
      setAnnouncements(announcements ?? []);
    } catch (e: any) {
      console.log(e);
    }
  };

  fetchDataAndSetMembersNum();
  fetchEventsAndAnnouncements();
  return (
    <div className={styles.container}>
      <div className={styles.graph_group}>
        <div className={styles.graph}>
          <AreaChartComponent />
        </div>
        <div className={styles.graph}>
          <BarChart data={members} />
        </div>
        <div className={styles.graph}>
          <LineChart />
        </div>
      </div>
    </div>
  );
};
export default Trends;
