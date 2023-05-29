import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRequestServiceAppointment } from "../../Services/appointments/appointments.service";
import { acceptRequestService } from "../../Services/requestServices/requestServices.service";
import "../../Style/PaymentMethods.css";
import { convertDate } from "../../Utils/Calculate";
import Counter from "./Counter/Counter";
import ModifyRequestService from "./ModifyRequestService";

const RequestService = (props: any) => {
  const navigate = useNavigate();
  const [isModify, setIsModify] = useState(false);
  const [isCounter, setIsCounter] = useState(false);
  const [counter, setCounter] = useState(props?.offer);
  const [fromDate, setFromDate] = useState<any>(props?.fromDate);
  const [toDate, setToDate] = useState<any>(props?.toDate);
  const [tempBudget, setTempBudget] = useState(props.budget);
  const [currentImages, setCurrentImages] = useState<string[]>(
    props?.currentImages
  );
  const [sampleImages, setSampleImages] = useState<string[]>(
    props?.sampleImages
  );

  function openModify() {
    setIsModify(true);
  }

  function closeModify() {
    setIsModify(false);
  }

  function openCounter() {
    setIsCounter(true);
  }

  function closeCounter() {
    setIsCounter(false);
  }

  function handleModify(data: any) {
    setTempBudget(data.budget);
    setFromDate(data.fromDate.toISOString());
    setToDate(data.toDate.toISOString());
    setCurrentImages(data.currentImages);
    setSampleImages(data.sampleImages);
  }

  async function handleCreateRequestServiceAppointment() {
    const appointment = await createRequestServiceAppointment(
      props.requestServiceId,
      props.fromDate,
      props.toDate
    );

    navigate("/appointmentDeposit", {
      state: appointment?.appointmentId,
    });
  }

  return (
    <div>
      <li key={props.requestServiceId}>
        <div className="info-item">
          <div className="info-header">
            <h2>
              {props?.stylistId?.firstName} {props?.stylistId?.lastName}
            </h2>
            <p>{props?.stylistId?.businessName}</p>
          </div>
          {props.status === "ACCEPTED" && (
            <div className="book-appointment info-details">
              <p>
                <b>Congratulations!</b> Your offer is accepted
              </p>
              <button
                onClick={handleCreateRequestServiceAppointment}
                className="book-button"
              >
                Book your appointment
              </button>
            </div>
          )}
          {props.status === "REPLIED" && (
            <div className="additional-info info-details">
              <p>
                <strong>Offer:</strong> ${counter}
              </p>
              <p>
                <strong>Offer by:</strong> {props?.madeOfferBy?.firstName}{" "}
                {props?.madeOfferBy?.lastName}
              </p>
              <button
                onClick={() => {
                  acceptRequestService(props?.requestServiceId);
                }}
                className="accept-button"
              >
                Accept
              </button>
              <button
                onClick={() => {
                  openCounter();
                }}
                className="counter-button"
              >
                Counter
              </button>
            </div>
          )}
          <div className="info-details">
            {props?.stylistId?.jobTitle && (
              <p>
                <strong>Job Title:</strong> {props?.stylistId?.jobTitle}
              </p>
            )}
            <p>
              <strong>Service:</strong> {props?.serviceId?.serviceName}
            </p>
            <p>
              <strong>Budget:</strong> ${tempBudget}
            </p>
            <p>
              <strong>From Date:</strong> {convertDate(fromDate)}
            </p>
            <p>
              <strong>To Date:</strong> {convertDate(toDate)}
            </p>
            {props?.offer && (
              <p>
                <strong>Offer:</strong> ${props?.offer}
              </p>
            )}
            {props.status === "PENDING" && (
              <button
                onClick={() => {
                  openModify();
                }}
                className="modify-button"
              >
                Modify
              </button>
            )}
          </div>
          <div className="info-image">
            {currentImages?.map((imageUrl: string, index: any) => (
              <img
                src={imageUrl}
                alt=""
                key={index}
                className="image-thumbnail"
              />
            ))}
          </div>
          <div className="info-image">
            {sampleImages?.map((imageUrl: string, index: any) => (
              <img
                src={imageUrl}
                alt=""
                key={index}
                className="image-thumbnail"
              />
            ))}
          </div>
        </div>
      </li>
      {isModify && (
        <ModifyRequestService
          {...props}
          fromDate={fromDate}
          toDate={toDate}
          budget={tempBudget}
          currentImages={currentImages}
          sampleImages={sampleImages}
          onModify={handleModify}
          key={"modify-key"}
          isModify={isModify}
          onClose={closeModify}
          content="This is the modal content"
        />
      )}
      {isCounter && (
        <Counter
          key={"counter-key"}
          isCounter={isCounter}
          onClose={closeCounter}
          setCounter={setCounter}
          {...props}
        />
      )}
    </div>
  );
};

export default RequestService;
