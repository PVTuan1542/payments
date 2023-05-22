import { useNavigate } from "react-router-dom";
import { createRequestServiceAppointment } from "../../Services/appointments/appointments.service";
import { acceptRequestService } from "../../Services/requestServices/requestServices.service";
import "../../Style/PaymentMethods.css";
import { convertDate } from "../../Utils/Calculate";

const RequestService = (props: any) => {
  const navigate = useNavigate();
  return (
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
              onClick={async () => {
                const appointment = await createRequestServiceAppointment(
                  props.requestServiceId
                );
                navigate("/appointmentDeposit", {
                  state: appointment?.appointmentId,
                });
              }}
              className="book-button"
            >
              Book your appointment
            </button>
          </div>
        )}
        {props.status === "REPLIED" && (
          <div className="additional-info info-details">
            <p>
              <strong>Offer:</strong> ${props?.offer}
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
            <button className="counter-button">Counter</button>
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
            <strong>Budget:</strong> ${props?.budget}
          </p>
          <p>
            <strong>From Date:</strong> {convertDate(props?.fromDate)}
          </p>
          <p>
            <strong>To Date:</strong> {convertDate(props?.toDate)}
          </p>
        </div>
        <div className="info-image">
          <img src={props?.currentImages[0]} alt="Current Look" />
        </div>
      </div>
    </li>
  );
};

export default RequestService;
