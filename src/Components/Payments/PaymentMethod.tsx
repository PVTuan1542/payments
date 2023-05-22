import "../../Style/PaymentMethods.css";

const PaymentMethod = (props: any) => {
  return (
    <li>
      <input type="radio" name="card" id="card2" onChange={()=> {
        props.setSelectedCard(props.paymentMethodId)
      }}  />
      <label htmlFor="card2">
        <strong>Card Number:</strong> **********{props?.lastFourNumbers}
        <br />
        <strong>Card Name:</strong> {props?.cardHolderName} <br />
        <strong>Type:</strong> {props?.type}
      </label>
    </li>
  );
};

export default PaymentMethod;
