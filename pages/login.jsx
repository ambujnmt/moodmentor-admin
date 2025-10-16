import React, { useEffect, useState } from 'react';
import Login from '../components/Forms/Login';
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext';

export default function LoginPage() {
  const { user } = useUser();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // Get the user from localStorage to maintain state across page refreshes
    const storedUser = localStorage.getItem("user");

    // If the user is found in context or localStorage, redirect to dashboard
    if (storedUser || user) {
      router.replace('/dashboard');
    } else {
      setCheckingAuth(false); // Done checking, no user found
    }
  }, [user, router]);

  // Show loading spinner while checking auth
  if (checkingAuth) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      {!user && <Login />}
    </div>
  );
}
