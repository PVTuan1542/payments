import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRequestService } from "../../../Services/requestServices/requestServices.service";
import "../../../Style/Messages/ModifyRequestService.css";
import {
  combinedDateTime,
  uppercaseServiceName,
} from "../../../Utils/Calculate";
import { StylistContext } from "../../StylistProfile/StylistProvider";
import CurrentImages from "../Modify/CurrentImages";

interface IRequestService {
  serviceId: string;
  stylistId: string;
  budget: number;
  fromDate: Date;
  toDate: Date;
  currentImages: string[];
  sampleImages: string[];
}

function CreateRequestService({ onClose, stylistId }: any) {
  const stylist: any = useContext(StylistContext);
  const [serviceId, setServiceId] = useState<any>("");
  const [fromDate, setFromDate] = useState<any>();
  const [toDate, setToDate] = useState<any>();
  const [date, setDate] = useState<any>();
  const [budget, setBudget] = useState<any>();
  const [minDate, setMinDate] = useState("");
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [sampleImages, setSampleImages] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  // const [requestService, setRequestService] = useState<IRequestService>({
  //   serviceId: "",
  //   stylistId: "",
  //   budget: 0,
  //   fromDate: new Date(),
  //   toDate: new Date(),
  //   currentImages: [],
  //   sampleImages: [],
  // });

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setMinDate(currentDate);
  }, []);

  function handleInputChange(e: any) {
    setBudget(e.target.value);
  }

  async function handleCreateRequestService() {
    const data: IRequestService = {
      serviceId,
      stylistId: stylist?.stylistId,
      fromDate: combinedDateTime(date, fromDate),
      toDate: combinedDateTime(date, toDate),
      budget: Number(budget),
      currentImages,
      sampleImages,
    };

    await createRequestService({
      data,
    });

    return;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <label htmlFor="lookingFor">Looking for</label>
        <select
          id="lookingFor"
          name="lookingFor"
          placeholder="Choose a service"
          onChange={(e) => {
            setServiceId(e.target.value);
          }}
        >
          {stylist?.services?.map((service: any) => {
            return (
              <option
                value={service?.serviceId}
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
          value={budget}
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
        <CurrentImages
          images={currentImages}
          setImages={setCurrentImages}
          setIsDisabled={setIsDisabled}
        />
        <label htmlFor="expectedLook">Expected look</label>
        <CurrentImages
          images={sampleImages}
          setImages={setSampleImages}
          setIsDisabled={setIsDisabled}
        />
        <div className="button-container">
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
          <button
            onClick={() => {
              handleCreateRequestService();
              navigate("/messages");
            }}
            className="resend-button"
            disabled={isDisabled}
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateRequestService;
