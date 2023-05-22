import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { convertDate } from "../../Utils/Calculate";
import "../../Style/Appointment.css";

const Appointment = (props: any) => {
  const navigate = useNavigate();
  const [dataPayment] = useState({
    appointmentId: props?.appointmentId,
    isAppointmentPay: true,
  });

  return (
    <li>
      <label htmlFor="appointment">
        <strong>Stylist:</strong>
        {props?.stylistId?.firstName} {props?.stylistId?.lastName}
        <br />
        <strong>From Date:</strong> {convertDate(props?.fromDate)} <br />
        <strong>To Date:</strong> {convertDate(props?.toDate)} <br />
        <strong>Status: </strong> {props?.status} <br />
        <strong>Total Service: </strong> ${props?.total} <br />
        <strong>Deposit: </strong> ${props?.deposit} (10%) <br />
        <strong>Amount: </strong> ${props?.amount} <br />
      </label>
      <button
        onClick={() => {
          navigate("/cardList", { state: dataPayment });
        }}
        className="payment-button"
      >
        Payment
      </button>
    </li>
  );
};

export default Appointment;
