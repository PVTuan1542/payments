import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, tokenCustomer } from "../../config";
import "../../Style/PaymentMethods.css";
import PaymentMethod from "./PaymentMethod";
import { useLocation } from "react-router-dom";
import {
  createAppointmentPay,
  createPaymentDeposit,
} from "../../Services/payments/payments.service";

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dataPayment = location.state;

  useEffect(() => {
    getPaymentMethods();
  }, []);

  const handlePaymentConfirmation = async () => {
    if (selectedCard) {
      let isCreated;
      const confirmation = window.confirm(
        "Are you sure you want to proceed with the payment?"
      );
      if (confirmation) {
        if (dataPayment.isAppointmentPay) {
          isCreated = await createAppointmentPay(dataPayment, selectedCard);
          navigate("/payments", {state: dataPayment.appointmentId })
        }

        if (dataPayment.isPaymentDeposit) {
          isCreated = await createPaymentDeposit(dataPayment, selectedCard);
          navigate("/appointments");
        }

        isCreated && window.alert("Payment in process!");
      }
    }
  };

  async function getPaymentMethods() {
    try {
      const result = await axios.get(`${API_URL}/paymentMethods`, {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
        params: {
          customerId: "5e6f04d2-1124-488f-a4e0-3041d2a6c018",
        },
      });

      setPaymentMethods(result.data.list);
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => {
            navigate("/addCard");
          }}
          className="add-card-button"
        >
          Add Card
        </button>
      </div>
      <div className="card-list-container">
        <h1>Payment methods</h1>
        <ul className="card-list">
          {paymentMethods?.map((paymentMethod: any, key: any) => {
            return (
              paymentMethod && (
                <PaymentMethod
                  {...paymentMethod}
                  setSelectedCard={setSelectedCard}
                  key={`card-${paymentMethod?.paymentMethodId}`}
                />
              )
            );
          })}
        </ul>
        <button
          onClick={() => {
            handlePaymentConfirmation();
          }}
          className="payment-button"
        >
          Payments
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
