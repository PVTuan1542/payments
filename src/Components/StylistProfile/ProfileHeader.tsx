import { useContext } from "react";
import { StylistContext } from "./StylistProvider";

function ProfileHeader() {
  const stylist: any = useContext(StylistContext);

  return (
    <div className="profile-header">
      <div className="profile-name-image">
        <img
          src={
            stylist?.avatar ??
            "http://s3.us-west-2.amazonaws.com/stylevidiabucket-development/1681179948437-test.jpg"
          }
          alt=""
          className="profile-image"
        />
        <h1 className="profile-name">
          {stylist?.firstName} {stylist?.lastName}
        </h1>
      </div>
      <p className="profile-location">
        {stylist?.businessName}, {stylist?.jobTitle}
      </p>
      <div className="profile-rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star"> </span>
        <span className="rating-stars"></span>
        <span className="rating-value">{stylist?.rate}</span>
        <span className="rating-count">({stylist?.totalReviews})</span>
      </div>
    </div>
  );
}

export default ProfileHeader;
