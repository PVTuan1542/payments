import { Routes, Route } from "react-router-dom";
import AppointmentDeposit from "./Components/Appointments/AppointmentDeposit";
import Appointments from "./Components/Appointments/Appointments";
import Messages from "./Components/Messages/Messages";
import AddCard from "./Components/Payments/AddCard";
import Payment from "./Components/Payments/Payment";
import PaymentMethods from "./Components/Payments/PaymentMethods";
import Payments from "./Components/Payments/Payments";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/addCard" element={<AddCard />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/appointmentDeposit" element={<AppointmentDeposit />}></Route>
        <Route path="/" element={<AppointmentDeposit />}></Route>
        <Route path="/cardList" element={<PaymentMethods />}></Route>
        <Route path="/appointments" element={<Appointments />}></Route>
        <Route path="/payments" element={<Payments />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
      </Routes>
    </div>
  );
}

export default App;
