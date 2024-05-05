import { Key, useState, useEffect } from "react";
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
  const [events, setEvents] = useState([{}]);
  const [announcements, setAnnouncements] = useState([{}]);

  useEffect(() => {
    fetchDataAndSetMembersNum();
    fetchEventsAndAnnouncements();
  }, []);

  const getNumbersOfMembers = async () => {
    try {
      const data = await supabase
        .from("member")
        .select("*", { count: "exact" });
      return data["count"];
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
      const members = await getNumbersOfMembers();
      const males = await getNumberOfMales();
      const females = await getNumberOfFemales();
      setMembersNum(members ?? 0);
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
        <SummaryCard
          text="Total Male"
          number={malesNum.toString()}
          type="male"
        />
        <SummaryCard
          text="Total Female"
          number={femalesNum.toString()}
          type="female"
        />
      </div>
      <div className={styles.bulletin}>
        <div className={styles.upcoming}>
          <span className={styles.events_heading}>Upcoming Events</span>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Theme</th>
                <th>Time</th>
                <th>Organiser</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event: any, index: Key | null | undefined) => (
                <tr key={index}>
                  <td>{event.date}</td>
                  <td>{event.theme}</td>
                  <td>{event.time}</td>
                  <td>{event.organiser}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.upcoming}>
          <span className={styles.events_heading}>Recent Announcements</span>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Time</th>
                <th>Persons Involved</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map(
                (announcement: any, index: Key | null | undefined) => (
                  <tr key={index}>
                    <td>{announcement.date}</td>
                    <td>{announcement.title}</td>
                    <td>{announcement.time}</td>
                    <td>{announcement.persons_involved}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
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
