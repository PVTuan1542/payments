import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL, tokenCustomer } from "../../config";
import "../../Style/AppointmentDeposit.css";
import { calculateAppointments, convertDate } from "../../Utils/Calculate";

const AppointmentDeposit = () => {
  const navigate = useNavigate();
  const [appointmentDeposit, setAppointmentDeposit] = useState<any>({});
  const [calculatedResult, setCalculatedResult] = useState<any>({});
  const [dataPayment, setDataPayment] = useState<any>();
  const location = useLocation();
  const appointmentId = location.state;

  useEffect(() => {
    getAppointmentDeposit();
  }, []);

  async function getAppointmentDeposit() {
    try {
      const result = await axios.get(
        `${API_URL}/appointments/${appointmentId}`,
        {
          headers: {
            Authorization: `Bearer ${tokenCustomer}`,
          },
          params: {
            customerId: "5e6f04d2-1124-488f-a4e0-3041d2a6c018",
          },
        }
      );

      const response = calculateAppointments(result?.data?.services);

      setCalculatedResult(response);

      setDataPayment({
        appointmentId: result.data?.appointmentId,
        isPaymentDeposit: true,
      });

      setAppointmentDeposit(result.data);
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return (
    <div className="appointment">
      <h1>Appointment Deposit</h1>
      <label htmlFor="appointment1">
        <br />
        <strong>Stylist:</strong>
        {appointmentDeposit?.stylistId?.firstName}{" "}
        {appointmentDeposit?.stylistId?.lastName}
        <br />
        <strong>From Date:</strong>{" "}
        {appointmentDeposit?.fromDate &&
          convertDate(appointmentDeposit?.fromDate)}{" "}
        <br />
        <strong>To Date:</strong>{" "}
        {appointmentDeposit?.toDate && convertDate(appointmentDeposit?.toDate)}{" "}
        <br />
        <strong>Total Service: </strong> ${calculatedResult.total}
        <br />
        <strong>Today Deposit: </strong> ${calculatedResult.deposit} (10%){" "}
        <br />
      </label>
      <button
        onClick={() => {
          navigate("/cardList", {
            state: dataPayment,
          });
        }}
        className="payment-button"
      >
        Payment deposit
      </button>
    </div>
  );
};

export default AppointmentDeposit;
