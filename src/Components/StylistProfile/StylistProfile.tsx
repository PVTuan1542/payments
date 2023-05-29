import "../../Style/Profile/StylistProfile.css";
import ProfileHeader from "./ProfileHeader";
import ButtonClick from "./ButtonClick";
import About from "./About";
import Service from "./Service";
import BusinessHours from "./BusinessHours";
import StylistProvider from "./StylistProvider";
import { useState } from "react";
import CreateRequestService from "../Messages/CreateRequestServices/CreateRequestService";

function Profile() {
  const [isCreateRequestService, setIsCreateRequestService] = useState(false);

  function openCreateRequestService() {
    setIsCreateRequestService(true);
  }

  function closeCreateRequestService() {
    setIsCreateRequestService(false);
  }

  return (
    <StylistProvider>
      <div className="profile-container">
        <ProfileHeader />
        <ButtonClick onOpen={openCreateRequestService} />
        <div className="profile-info">
          <About />
          <Service />
          <BusinessHours />
        </div>
      </div>
      {isCreateRequestService && (
        <CreateRequestService
          key={"modify-key"}
          onClose={closeCreateRequestService}
        />
      )}
    </StylistProvider>
  );
}

export default Profile;
