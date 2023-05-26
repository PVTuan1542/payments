import { useState } from "react";

function Counter({ isModify, onClose, onModify, ...props }: any) {
  const [services, setServices] = useState<any[]>([]);
  const [tempBudget, setTempBudget] = useState(props.budget);
  const [minDate, setMinDate] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <label htmlFor="lookingFor">Looking for</label>
        <select
          id="lookingFor"
          name="lookingFor"
          placeholder="Choose a service"
        >
          {services.map((service) => {
            return (
              <option
                value={service.serviceId}
                key={`service-${service.serviceId}`}
              ></option>
            );
          })}
        </select>
        <label htmlFor="budget">My budget</label>
        <input
          type="number"
          id="budget"
          name="budget"
          placeholder="$ 0.00"
          value={tempBudget}
        />
        <label htmlFor="needDate">I need it by</label>
        <div className="date-time-input">
          <input
            type="time"
            id="needTime"
            name="needTimeFromDate"
            onChange={(e) => {}}
          />
          <input
            type="time"
            onChange={(e) => {}}
            id="needTime"
            name="needTimeToDate"
          />
          <input type="date" id="needDate" name="needDate" min={minDate} />
        </div>
        <div className="button-container">
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
          <button className="resend-button">Resend</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
