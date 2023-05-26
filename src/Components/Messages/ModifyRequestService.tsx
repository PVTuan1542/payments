import { useEffect, useState } from "react";
import { modifyRequestService } from "../../Services/requestServices/requestServices.service";
import { getStylistService } from "../../Services/services/services.service";
import "../../Style/Messages/ModifyRequestService.css";
import {
  combinedDateTime,
  formattedTime,
  getDate,
  uppercaseServiceName,
} from "../../Utils/Calculate";
import CurrentImages from "./Modify/CurrentImages";

function ModifyRequestService({ isModify, onClose, onModify, ...props }: any) {
  const [services, setServices] = useState<any[]>([]);
  const [fromDate, setFromDate] = useState<any>(formattedTime(props.fromDate));
  const [toDate, setToDate] = useState<any>(formattedTime(props.toDate));
  const [date, setDate] = useState<any>(getDate(props.fromDate));
  const [tempBudget, setTempBudget] = useState(props.budget);
  const [minDate, setMinDate] = useState("");
  const [currentImages, setCurrentImages] = useState<string[]>(props?.currentImages);
  const [sampleImages, setSampleImages] = useState<string[]>(props?.sampleImages);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    getServices();

    const currentDate = new Date().toISOString().split("T")[0];
    setMinDate(currentDate);
  }, []);

  async function getServices() {
    const response = await getStylistService();

    setServices(response.list);
  }

  async function handleUpdateRequestService() {
    const data = {
      requestServiceId: props.requestServiceId,
      fromDate: combinedDateTime(date, fromDate),
      toDate: combinedDateTime(date, toDate),
      budget: Number(tempBudget),
      currentImages,
      sampleImages
    };

    const isUpdated = await modifyRequestService({
      data,
    });

    isUpdated && onModify(data);

    return isUpdated;
  }

  function handleInputChange(e: any) {
    setTempBudget(e.target.value);
  }

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
              >
                {uppercaseServiceName(service.serviceName)}
              </option>
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
          onChange={handleInputChange}
        />
        <label htmlFor="needDate">I need it by</label>
        <div className="date-time-input">
          <input
            type="time"
            id="needTime"
            name="needTimeFromDate"
            onChange={(e) => {
              setFromDate(e.target.value);
            }}
            value={fromDate}
          />
          <input
            type="time"
            onChange={(e) => {
              setToDate(e.target.value);
            }}
            id="needTime"
            name="needTimeToDate"
            value={toDate}
          />
          <input
            type="date"
            id="needDate"
            name="needDate"
            min={minDate}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
          />
        </div>
        <label htmlFor="currentLook">Current look</label>
        <CurrentImages images={currentImages} setImages={setCurrentImages} setIsDisabled={setIsDisabled}/>
        <label htmlFor="expectedLook">Expected look</label>
        <CurrentImages images={sampleImages} setImages={setSampleImages} setIsDisabled={setIsDisabled}/>
        <div className="button-container">
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
          <button
            onClick={() => {
              handleUpdateRequestService();
              onClose();
            }}
            className="resend-button"
            disabled = {isDisabled}
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModifyRequestService;
