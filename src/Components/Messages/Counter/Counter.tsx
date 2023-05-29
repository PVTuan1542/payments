import { useState } from "react";
import { makeOffer } from "../../../Services/requestServices/requestServices.service";

function Counter({ isCounter, onClose, setCounter, ...props }: any) {
  const [offer, setOffer] = useState<any>(null);

  const handlerMakeOffer = async () => {
    makeOffer({
      data: {
        offer,
        requestServiceId: props.requestServiceId,
      },
    });
    setCounter(offer)
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <label htmlFor="budget">Budget</label>
        <input
          disabled
          type="text"
          id="budget"
          name="budget"
          placeholder="$ 0.00"
          value={`$ ${props?.budget}`}
        />
        {props?.offer && (
          <div>
            <label htmlFor="budget">
              Counter by {props?.madeOfferBy?.firstName}{" "}
              {props?.madeOfferBy?.lastName}
            </label>
            <input
              disabled
              type="text"
              id="budget"
              name="budget"
              placeholder="$ 0.00"
              value={`$ ${props?.offer}`}
            />
          </div>
        )}
        <label htmlFor="budget">Enter your counter</label>
        <input
          type="number"
          id="budget"
          name="budget"
          placeholder="$ 0.00"
          value={offer}
          onChange={(e) => {
            setOffer(Number(e.target.value));
          }}
        />
        <div className="button-container">
          <button onClick={onClose} className="counter-button">
            Cancel
          </button>
          <button
            onClick={() => {
              handlerMakeOffer();
              onClose();
            }}
            className="counter-button"
          >
            Counter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
