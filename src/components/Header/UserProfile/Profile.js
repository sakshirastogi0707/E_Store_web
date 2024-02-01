import React, { useState, useEffect } from "react";
import "./Profile.css";
import menu from "../HeaderLinks.json";
import { useCustomModal } from "../../../Hooks/useModal";
import { LoginLogic } from "../../Login/LoginLogic";
import { TempStorageService } from "../../../services/core/temp.storage.service";
import { UserService } from "../../../services/api/user.service";
import { toast } from "react-toastify";
import { messages } from "../../../constants/msg";
import { isAuthenticated } from "../../../utils/authService";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const {
    openModal,
    CustomModalWrapper,
    selectedOption,
    setSelectedOption,
    closeModal,
  } = useCustomModal();
  const [isUserLogin, setIsUserLogin] = useState(null);
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      let res = await UserService.logout();
      if (res) {
        TempStorageService.removeCookie([
          { name: "token" },
          {
            name: "UserId",
          },
        ]);
        toast.success(messages.LOGOUT_SUCCESS);
        navigate("/");
      } else {
        toast.error(messages.LOGOUT_ERROR);
      }
    } catch (error) {
      toast.error(messages.LOGOUT_ERROR);
    }
  };

  const handleSelectChange = (event) => {
    let selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    selectedValue === "Login" && openModal();
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case "Login":
        return (
          <CustomModalWrapper heading={"Login"}>
            <LoginLogic closeModal={closeModal} />
          </CustomModalWrapper>
        );
      case "Logout":
        logoutUser();
      default:
        return null;
    }
  };

  const handleLogin = (isUserLogin) => {
    let newProfile = [];

    try {
      if (Array.isArray(menu.profileMenu)) {
        if (isUserLogin) {
          newProfile = [
            { id: 1, label: "My Account" },
            { id: 2, label: "Shopping cart" },
            { id: 3, label: "Logout" },
          ];
        } else {
          newProfile = [
            { id: 1, label: "My Account" },
            { id: 2, label: "Login" },
          ];
        }
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }

    setProfile(newProfile);
  };

  useEffect(() => {
    if (isAuthenticated()) {
      setIsUserLogin(true);
      handleLogin(true);
    } else {
      setIsUserLogin(false);
      handleLogin(false);
    }
  }, [isAuthenticated()]);

  return (
    <div className="profile-Container">
      <select
        className="select-dropdown"
        onChange={handleSelectChange}
        value={selectedOption}
      >
        {profile.map((item) => {
          return (
            <option key={item.id} value={item.label}>
              {item.label}
            </option>
          );
        })}
      </select>
      {renderComponent()}
    </div>
  );
};
