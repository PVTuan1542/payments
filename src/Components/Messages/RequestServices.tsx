import "../../Style/Messages/RequestServices.css";
import RequestService from "./RequestService";

const RequestServices = (props: any) => {
  return (
    <div className="info-list">
      <ul>
        {props?.list?.map((requestService: any, index: any) => (
          <RequestService
            key={`requestService-${requestService?.requestServiceId}`}
            {...requestService}
          />
        ))}
      </ul>
    </div>
  );
};

export default RequestServices;
