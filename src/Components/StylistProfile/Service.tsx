import { useContext } from "react";
import { uppercaseServiceName } from "../../Utils/Calculate";
import { StylistContext } from "./StylistProvider";

function Service() {
  const stylist: any = useContext(StylistContext);

  return (
    <div className="service">
      <h2 className="section-title">Services</h2>
      <ul className="service-list">
        {stylist?.services?.map((service: any) => (
          <li key={service?.serviceId}>{uppercaseServiceName(service.serviceName)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
