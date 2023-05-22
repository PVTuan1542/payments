import "../../Style/AddCard.css";
import { useState } from "react";
import axios from "axios";
import { API_URL, tokenCustomer } from "../../config";
import { useNavigate } from "react-router-dom";

function AddCard() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpMonth, setExpMonth] = useState("");
  const [cardExpYear, setExpYear] = useState("");
  const [cardCVC, setCvc] = useState("");
  const navigate = useNavigate();

  async function addCard() {
    await axios.post(
      `${API_URL}/paymentMethods`,
      {
        cardNumber,
        cardExpMonth,
        cardExpYear,
        cardCVC,
        cardName,
      },
      {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
      }
    );
    return;
  }

  return (
    <div className="addCard">
      <form
        id="add-card-form"
        onSubmit={() => {
          addCard();
          navigate("/cardList");
        }}
      >
        <input
          type="text"
          id="card-name"
          onChange={(e) => {
            setCardName(e.target.value);
          }}
          placeholder="Card Name"
        />
        <input
          type="text"
          id="card-number"
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
          placeholder="Card Number"
        />
        <div className="expiration-date">
          <input
            type="number"
            id="expiration-month"
            onChange={(e) => {
              setExpMonth(e.target.value);
            }}
            placeholder="MM"
          />
          <span>/</span>
          <input
            type="number"
            id="expiration-year"
            onChange={(e) => {
              setExpYear(e.target.value);
            }}
            placeholder="YYYY"
          />
        </div>
        <input
          type="number"
          id="cvc"
          onChange={(e) => {
            setCvc(e.target.value);
          }}
          placeholder="CVC"
        />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default AddCard;
