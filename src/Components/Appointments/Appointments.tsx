import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, tokenCustomer } from "../../config";
import { calculateAppointments } from "../../Utils/Calculate";
import Appointment from "./Appointment";
import "../../Style/Appointments.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments();
  }, []);

  async function getAppointments() {
    try {
      const result = await axios.get(`${API_URL}/appointments`, {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
        params: {
          customerId: "5e6f04d2-1124-488f-a4e0-3041d2a6c018",
          fromDate: new Date()
        },
      });

      setAppointments(result.data.list);
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return (
    <div className="appointment">
      <h1>Appointments</h1>
      <ul className="appointment-list">
        {appointments?.map((appointment: any) => {
          let resultCalculate = calculateAppointments(appointment?.services) as any
          return (
            appointment && (
              <Appointment {...appointment} {...resultCalculate} key={appointment?.appointmentId} />
            )
          );
        })}
      </ul>
    </div>
  );
};

export default Appointments;
