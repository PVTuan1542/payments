import { useContext } from "react";
import { StylistContext } from "./StylistProvider";

function BusinessHours() {
  const stylist: any = useContext(StylistContext);

  return (
    <div className="business-hours">
      <h2 className="section-title">Business Hours</h2>
      <ul className="opening-hours-list">
        <li>Monday: {stylist?.userSchedules?.monday}</li>
        <li>Tuesday: {stylist?.userSchedules?.tuesday}</li>
        <li>Wednesday: {stylist?.userSchedules?.wednesday}</li>
        <li>Thursday: {stylist?.userSchedules?.thursday}</li>
        <li>Friday: {stylist?.userSchedules?.friday}</li>
        <li>Saturday: {stylist?.userSchedules?.saturday}</li>
        <li>Sunday: Closed</li>
      </ul>
    </div>
  );
}

export default BusinessHours;
