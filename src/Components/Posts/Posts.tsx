import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import "../../Style/Posts/Posts.css";

const RecentActivity = () => {
  const activityData = [
    {
      profileImage:
        "http://s3.us-west-2.amazonaws.com/stylevidiabucket-development/1681179948437-test.jpg",
      name: "John Doe",
      title: "Reviewed a business",
      image:
        "http://s3.us-west-2.amazonaws.com/stylevidiabucket-development/1681028188009-hairCut.jpg",
      service: "XYZ Restaurant",
      rating: 4.5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      profileImage:
        "http://s3.us-west-2.amazonaws.com/stylevidiabucket-development/1681179948437-test.jpg",
      name: "Jane Smith",
      title: "Added a photo",
      image:
        "http://s3.us-west-2.amazonaws.com/stylevidiabucket-development/1681028188009-hairCut.jpg",
      service: "ABC Cafe",
      rating: 3.8,
      description: "Nulla facilisi. Fusce vitae vestibulum erat.",
    },
    {
      profileImage:
        "http://s3.us-west-2.amazonaws.com/stylevidiabucket-development/1681179948437-test.jpg",
      name: "Mike Johnson",
      title: "Wrote a tip",
      image:
        "http://s3.us-west-2.amazonaws.com/stylevidiabucket-development/1681028188009-hairCut.jpg",
      service: "DEF Salon",
      rating: 4.2,
      description: "Praesent vitae consequat enim, eu ultricies leo.",
    },
  ];

  return (
    <div className="tag-recent-activity">
      <div className="recent-activity-title">
        <h2 className="recent-activity-title">Recent Activity</h2>
      </div>
      <div className="recent-activity">
        {activityData.map((activity, index) => (
          <div className="activity-item" key={index}>
            <div className="activity-profile">
              <img
                src={activity.profileImage}
                alt=""
                className="profile-image"
              />
              <div className="name-title">
                <span className="profile-name">{activity.name}</span>
                <br />
                <span className="profile-title">{activity.title}</span>
              </div>
            </div>
            <div className="activity-details">
              <div className="activity-info">
                <img src={activity.image} alt="" className="activity-image" />
                <div className="activity-description">
                  <span className="activity-service">{activity.service}</span>
                  <div className="activity-rating">
                    <span className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          key={`star-${index}-${i}`}
                          className={`star-icon ${
                            i < activity.rating ? "filled" : ""
                          }`}
                        />
                      ))}
                    </span>
                    <span className="rating-value">{activity.rating}</span>
                  </div>
                  <p className="activity-text">{activity.description}</p>
                </div>
              </div>
            </div>
            <button className="like-button">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
