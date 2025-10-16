import React, { useEffect, useState } from 'react';

export default function Main() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Redirect to signUp page after full transition (3 seconds)
    const redirectTimer = setTimeout(() => {
      window.location.href = '/login'; // ✅ Simple client-side redirect
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <>
      {/* <section
         className={`bg-gradient-to-b from-[#d4165b] to-[#202020] min-h-screen flex flex-col gap-5 items-center justify-center transition-opacity duration-500 ${
           fadeOut ? 'opacity-0' : 'opacity-100'
         }`}
       >
         <img src="https://nmtdevserver.com/doodli/logo.svg" className="w-[30%] md:w-[40%] lg:w-[50%] xl:w-[60%]" alt="Logo" />
       </section> */}
    </>
  );
}
