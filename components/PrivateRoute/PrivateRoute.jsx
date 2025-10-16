import { useUser } from "../../context/UserContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const { user } = useUser();
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false); // Track the completion of the check

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    // Check if the user exists in the localStorage or context
    if (storedUser || user) {
      setIsChecked(true); // User is authenticated, continue to the requested page
    } else {
      setIsChecked(true); // Check is done, proceed
      // If not logged in and not already on login page, redirect to login
      if (router.pathname !== "/login") {
        router.push("/login");
      }
    }
  }, [user, router]);

  // Prevent rendering children until the user state is fully checked
  if (!isChecked) {
    return null; // Optionally, you can return a loading spinner here
  }

  // If no user is found, stop rendering children
  if (!user) {
    return null; // Optionally, you can return a loading spinner here as well
  }

  // If the user is authenticated, render the children (the restricted page)
  return children;
};

export default PrivateRoute;
