import { useEffect, useState } from "react";
import { getRequestServices } from "../../Services/requestServices/requestServices.service";
import "../../Style/Messages/RequestServices.css";
import RequestServices from "./RequestServices";

const Messages = () => {
  const [requestServicePending, setRequestServicePending] = useState<any>([]);
  const [requestServiceReplied, setRequestServiceReplied] = useState<any>([]);
  const [requestServiceAccepted, setRequestServiceAccepted] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const [
      requestServicePending,
      requestServiceReplied,
      requestServiceAccepted,
    ] = await Promise.all([
      getRequestServices("PENDING"),
      getRequestServices("REPLIED"),
      getRequestServices("ACCEPTED"),
    ]);

    setRequestServicePending(requestServicePending);
    setRequestServiceReplied(requestServiceReplied);
    setRequestServiceAccepted(requestServiceAccepted);
  }

  return (
    <div>
      {requestServiceAccepted && (
        <div className="request-service-accepted">
          <h1 className="heading-with-line">Accepted offers</h1>
          <RequestServices
            key={`requestServiceAccepted-${requestServiceAccepted?.requestServiceId}`}
            {...requestServiceAccepted}
          />
        </div>
      )}
      {requestServiceReplied && (
        <div className="request-service-replied">
          <h1 className="heading-with-line">Replies</h1>
          <RequestServices
            key={`requestServiceReplied-${requestServiceReplied?.requestServiceId}`}
            {...requestServiceReplied}
          />
        </div>
      )}
      {requestServicePending && (
        <div className="request-service-pending">
          <h1 className="heading-with-line">Pending requests</h1>
          <RequestServices
            key={`requestServicePending-${requestServicePending?.requestServiceId}`}
            {...requestServicePending}
          />
        </div>
      )}
    </div>
  );
};

export default Messages;
