import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

function ButtonClick({ onOpen }: any) {
  return (
    <div className="button-click">
      <button className="request-service-button" onClick={onOpen}>
        <span>Request Service</span>
      </button>{" "}
      <button className="heart-button">
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <button className="share-button">
        <FontAwesomeIcon icon={faShare} />
      </button>
    </div>
  );
}

export default ButtonClick;
