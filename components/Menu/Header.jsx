import React, { useState, useContext, useEffect } from "react";
import { FaBars, FaCog, FaBell } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoMdNotifications } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi2";
import { LanguageContext } from "../../context/LanguageContext";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, useDisclosure } from "@heroui/react";
import { Link } from "@heroui/link";
import { IoLanguage } from "react-icons/io5";
import Tmodal from "../Tmodal/Tmodal"
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/router";
import { logoutUser } from "../../utils/fetchApi";  
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";


 

export default function Header({ menuOpen, toggleMenu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const { switchLanguage, locale, translateText } = useContext(LanguageContext);
  const [clientLocale, setClientLocale] = useState("");
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setUser, accessToken, setAccessToken, refreshToken, setRefreshToken } = useUser();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setClientLocale(locale.toUpperCase());
  }, [locale]);


  const notifications = [
    { id: 1, heading: "New Message", description: "New message from John", isNew: true },
    { id: 2, heading: "Report Approved", description: "Your report has been approved", isNew: true },
    { id: 3, heading: "Meeting Scheduled", description: "Meeting scheduled for Monday", isNew: false },
    { id: 4, heading: "New Comment", description: "New comment on your post", isNew: false },
  ];

  const newNotificationCount = notifications.filter(n => n.isNew).length;


  const handleLogout = async () => {
    console.log("Access Token (before logout):", accessToken);
    console.log("Refresh Token (before logout):", refreshToken);
  
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
  
    try {
      const res = await logoutUser(accessToken, refreshToken);
  
      // ✅ Remove tokens from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
  
      // ✅ Clear in-memory tokens (React state)
      setUser(null);
      setAccessToken(null);
      setRefreshToken(null);
  
      // ✅ Success message
      setSuccessMsg(res.msg);
  
      // ✅ Confirm tokens removed
      console.log("Access Token (after logout):", localStorage.getItem("accessToken")); // should be null
      console.log("Refresh Token (after logout):", localStorage.getItem("refreshToken")); // should be null
  
      // ✅ Redirect to login page
      setTimeout(() => {
        // Use either of the below:
        router.push("/login"); 
        // or force reload if router.push doesn't reset state:
        // window.location.href = "/login";
      }, 1000);
  
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="bg-gray-100  text-[#1F252C] flex justify-between lg:justify-end items-center p-3 sticky top-0 z-50 border-1 border-b-[#dbdcdf]">
      <button onClick={toggleMenu} className="text-[#1F252C] text-xl p-2 lg:hidden block ">
        {menuOpen ? <RxCross2 /> : <FaBars />}
      </button>

      <div className="flex items-center text-2xl relative gap-4">

        {/* User profile icon */}
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          <HiUserCircle className="cursor-pointer hover:text-[#000] text-[#3d7754] rounded-full w-[30px] h-[30px] p-[1px] bg-[#3d775429]" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-40 bg-white text-black shadow-lg rounded-md z-50">
            <ul className="text-sm !pl-0 m-0">
              <li className="p-3 hover:bg-gray-200 hover:rounded-t-md cursor-pointer flex hover:text-[#3d7754]">
                {/* {translateText("profile")} */}
                <Link href="/profile/editProfile" className="text-[14px] !text-[#000] text-primary-[unset]">
                  <FaRegUser className="relative top-[0px]" />&nbsp; My Account
                </Link>
              </li> 
              <hr className="m-0" />
              <li className=" hover:bg-gray-200 hover:text-[#3d7754] cursor-pointer"><Button className="w-full bg-white flex justify-start hover:rounded-none px-3 hover:text-[#3d7754]" onPress={onOpen}><MdOutlineLogout className="relative top-[2px]" /> Logout </Button></li>
            </ul>
          </div>
        )}
        {/* // User profile icon */}

        {/* Notification Icon */}
        <div className="relative cursor-pointer" onClick={() => setNotificationOpen(!notificationOpen)}>
          <IoMdNotifications className="cursor-pointer hover:text-[#000] text-[#3d7754] rounded-full w-[30px] h-[30px] p-[4px] bg-[#3d775429] text-[12px]" />
          {newNotificationCount > 0 && (
            <span className="absolute -top-2 -right-1 bg-black text-white text-xs px-1 rounded-full animate-pulse">
              {newNotificationCount}
            </span>
          )}

          {notificationOpen && (
            <div className="absolute right-0 top-10 mt-2 w-80 bg-white text-black shadow-lg rounded-md border z-50">
              <div className="flex justify-between items-center p-3 border-b">
                <span className="text-[18px] font-medium">Notification</span>
                <button className="text-[#3d7754] text-[12px] underline hover:text-[#000]">Clear All</button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {/* Notification Item 1 */}
                <div className="flex items-start gap-3 p-3 hover:bg-gray-100 border-b">
                  <img src="https://coderthemes.com/ubold/layouts/default/assets/images/users/user-2.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1 text-sm">
                    <h5 className="text-black font-normal text-[13px]">Cristina Pride</h5>
                    <p className="text-gray-600 text-xs mb-0">Hi, How are you? What about our next ...</p>
                  </div>
                  <button className="text-gray-400 hover:text-black">×</button>
                </div>

                {/* Notification Item 2 */}
                <div className="flex items-start gap-3 p-3 hover:bg-gray-100 border-b">
                  <img src="https://coderthemes.com/ubold/layouts/default/assets/images/users/user-3.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1 text-sm">
                    <h5 className="text-black font-normal text-[13px]">Caleb Flakelar</h5>
                    <p className="text-gray-600 text-xs mb-0">1 min ago</p>
                  </div>
                  <button className="text-gray-400 hover:text-black">×</button>
                </div>

                {/* Notification Item 3 */}
                <div className="flex items-start gap-3 p-3 hover:bg-gray-100 border-b">
                  <img src="https://coderthemes.com/ubold/layouts/default/assets/images/users/user-2.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1 text-sm">
                    <h5 className="text-black font-normal text-[13px]">Karen Robinson</h5>
                    <p className="text-gray-600 text-xs mb-0">Wow! This admin looks good and awe...</p>
                  </div>
                  <button className="text-gray-400 hover:text-black">×</button>
                </div>

                {/* Notification Item 4 */}
                <div className="flex items-start gap-3 p-3 hover:bg-gray-100 border-b">
                  <img src="https://coderthemes.com/ubold/layouts/default/assets/images/users/user-3.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1 text-sm">
                    <h5 className="text-black font-normal text-[13px]">New user registered.</h5>
                    <p className="text-gray-600 text-xs mb-0">5 hours ago</p>
                  </div>
                  <button className="text-gray-400 hover:text-black">×</button>
                </div>

                {/* Notification Item 5 */}
                <div className="flex items-start gap-3 p-3 hover:bg-gray-100 border-b">
                  <img src="https://coderthemes.com/ubold/layouts/default/assets/images/users/user-2.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1 text-sm">
                    <h5 className="text-black font-normal text-[13px]">Cristina Pride</h5>
                    <p className="text-gray-600 text-xs mb-0">Hi, How are you? What about our next ...</p>
                  </div>
                  <button className="text-gray-400 hover:text-black">×</button>
                </div>
              </div>
              <Link href="#" className="text-center block p-3 text-[#3d7754] hover:text-[#000] hover:underline text-sm font-semibold">
                View All →
              </Link>
            </div>
          )}
        </div>
        {/* // Notification Icon */}
   

      </div>
    </div>
  );
}
