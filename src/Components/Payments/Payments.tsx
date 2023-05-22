import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_URL, tokenCustomer } from "../../config";
import "../../Style/Appointment.css";
import "../../Style/Payments.css";
import { convertDate } from "../../Utils/Calculate";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const location = useLocation()
  const appointmentId = location.state

  useEffect(() => {
    getPayments();
  }, []);

  async function getPayments() {
    try {
      const result = await axios.get(`${API_URL}/payments`, {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
        params: {
          sender: "5e6f04d2-1124-488f-a4e0-3041d2a6c018",
          appointmentId
        },
      });

      setPayments(result.data.list);
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return (
    <div className="payments">
      <h1>Payments</h1>
      <div className="card-list-payments">
        {payments?.map((payment: any) => {
          return (
            payment && (
              <div className="card">
                <div className="card-info">
                  <div className="card-row">
                    <span className="card-label">Total:</span>
                    <span className="card-value">${payment?.netAmount}</span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Date</span>
                    <span className="card-value">
                      {convertDate(payment.createdAt)}
                    </span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Fee:</span>
                    <span className="card-value">${payment.fee}</span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Tip:</span>
                    <span className="card-value">${payment.tip}</span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Type:</span>
                    <span className="card-value">{payment.paymentType}</span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Status:</span>
                    <span className="card-value">{payment.status}</span>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Payments;
