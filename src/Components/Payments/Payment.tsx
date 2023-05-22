import "../../Style/Payment.css";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tip, setTip] = useState(0);
  const [description, setDescription] = useState("");
  const [appointmentId, setAppointmentId] = useState("");
  const navigate = useNavigate();

  async function payment() {

    await axios.post(`${API_URL}/payment/intent`, {
      amount,
      discount,
      tip,
      description,
      paymentMethodId: "61548da8-a689-4c85-87e7-e366da3cb864",
      appointmentId,
    });
    return;
  }

  return (
    <div className="payment">
      <form
        id="payment-form"
        onSubmit={() => {
          payment();
          navigate('/cardList')
        }}
      >
        <input
          type="text"
          id="appointment-id"
          onChange={(e) => {
            setAppointmentId(e.target.value);
          }}
          placeholder="AppointmentId"
        />
        <input
          type="number"
          id="amount"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          placeholder="Amount"
        />
        <input
          type="number"
          id="discount"
          onChange={(e) => {
            setDiscount(Number(e.target.value));
          }}
          placeholder="Discount"
        />
        <input
          type="number"
          id="tip"
          onChange={(e) => {
            setTip(Number(e.target.value));
          }}
          placeholder="Tip"
        />
        <input
          type="text"
          id="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
        />
        <button type="submit">Payment</button>
      </form>
    </div>
  );
}

export default Payment;
