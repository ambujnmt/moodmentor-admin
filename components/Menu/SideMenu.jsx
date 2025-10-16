import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Accordion, AccordionItem } from "@heroui/react";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { Link } from "@heroui/link";
import { LanguageContext } from "../../context/LanguageContext";
import { MdGroupAdd } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";

export default function SideMenu({ isOpen, onClose }) {
  const { switchLanguage, locale, translateText } = useContext(LanguageContext);
  const [clientLocale, setClientLocale] = useState("");
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    setClientLocale(locale.toUpperCase());
  }, [locale]);

  // State to track which accordion section is open
  const [openSection, setOpenSection] = useState(() => {
    if (pathname.includes("/user")) return "user";
    if (pathname.includes("/interest")) return "interest";
    if (pathname.includes("/category")) return "category";
    return "";
  });

  const isActive = (path) => pathname === path;

  return (
    <div
      className={`
        fixed top-0 left-0 z-40 h-full w-64 bg-gray-100 text-[#1F252C] flex flex-col transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0
      `}
    >
      {/* Mobile Close Button */}
      <div className="lg:hidden p-4 flex justify-end">
        <button onClick={onClose} className="text-[#1F252C] text-2xl">×</button>
      </div>

      {/* Header */}
      <div className="p-[12px] bg-[#3d7754] flex justify-center text-xl font-semibold">
        {/* <img src="https://nmtdevserver.com/doodli/logo.svg" className="w-[30%] md:w-[40%] lg:w-[50%] 
        xl:w-[60%] h-auto" alt="Logo" /> */}
        <p className="m-0 text-white"> Mood Mentor </p>
      </div>

      {/* Scrollable Menu Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <ul className="space-y-2 px-2 py-4 sidemenu-ul">

          {/* Dashboard */}
          <li>
            <Link
              href="/dashboard"
              className={`gap-1 text-[15px] font-medium p-2 flex items-center rounded hover:text-[#3d7754] ${isActive("/dashboard") ? "text-[#3d7754] bg-[#3d775430]" : "text-[#1F252C]"}`}
            >
              <MdDashboard className="text-[#3d7754]" />
              Dashboard
            </Link>
          </li>

          {/* User Management */}
          <Accordion variant="light" selectedKeys={openSection === "user" ? ["user"] : []} onSelectionChange={() => setOpenSection("user")}>
            <AccordionItem key="user"
              classNames={{
                item: "p-2",
                title: "text-[#1F252C]",
                trigger: "py-[0.5rem]",
                indicator: "text-[#1F252C]"
              }}
              aria-label="User Management"
              title={
                <span className="flex items-center gap-2 text-[15px] hover:text-[#3d7754]">
                  <FaUser className="text-[#3d7754]" />
                  User Management
                </span>
              }
            >
              <ul className="space-y-1">
                <li className="rounded">
                  <Link
                    href="/user/userListing"
                    className={`text-[15px] p-2 w-full block rounded ${isActive("/user/userListing") ? "text-[#3d7754] bg-[#3d775429]" : "text-gray-700 hover:text-[#3d7754] hover:bg-[#3d775429]"}`}
                  >
                    User Listing
                  </Link>
                </li>
              </ul>
            </AccordionItem>
          </Accordion>

          {/* Interest */}
          <Accordion variant="light" selectedKeys={openSection === "interest" ? ["interest"] : []} onSelectionChange={() => setOpenSection("interest")}>
            <AccordionItem key="interest"
              classNames={{
                item: "p-2 hover:bg-[#eaebecb6]  rounded",
                title: "text-[#1F252C]",
                trigger: "py-[0.5rem]",
                indicator: "text-[#1F252C]"
              }}
              aria-label="Interest"
              title={
                <span className="flex items-center gap-2 text-[15px] hover:text-[#3d7754]">
                  <FaUser className="text-[#3d7754]" />
                  Interest
                </span>
              }
            > 
              <ul className="space-y-1">
                <li className="rounded">
                  <Link
                    href="/interest/addInterest"
                    className={`text-[15px] p-2 w-full block rounded ${isActive("/interest/addInterest") ? "text-[#3d7754] bg-[#3d775429]" : "text-gray-700 hover:text-[#3d7754] hover:bg-[#3d775429]"}`}
                  >
                    Add Interest
                  </Link>
                </li>
                <li className="rounded">
                  <Link
                    href="/interest/interestList"
                    className={`text-[15px] p-2 w-full block rounded ${isActive("/interest/interestList") ? "text-[#3d7754] bg-[#3d775429]" : "text-gray-700 hover:text-[#3d7754] hover:bg-[#3d775429]"}`}
                  >
                    Interest Listing
                  </Link>
                </li>
              </ul>
            </AccordionItem>
          </Accordion>

          {/* Group Management */}
          <li>
            <Link
              href="#"
              className={`gap-1 text-[15px] font-medium p-2 flex items-center rounded hover:text-[#3d7754] ${isActive("#") ? "text-[#3d7754] bg-[#3d775429]" : "text-[#1F252C]"}`}
            >
              <MdGroupAdd className="text-[#3d7754]" />
              Group Management
            </Link>
          </li>

          {/* Category Management */}
          <Accordion variant="light" selectedKeys={openSection === "category" ? ["category"] : []} onSelectionChange={() => setOpenSection("category")}>
            <AccordionItem key="category"
              classNames={{
                item: "p-2 hover:bg-[#eaebecb6]  rounded",
                title: "text-[#1F252C]",
                trigger: "py-[0.5rem]",
                indicator: "text-[#1F252C]"
              }}
              aria-label="Category Management"
              title={
                <span className="flex items-center gap-2 text-[15px] hover:text-[#3d7754]">
                  <TbCategory2 className="text-[#3d7754]" />
                  Category Management
                </span>
              }
            >
              <ul className="space-y-1">
                <li className="rounded">
                  <Link
                    href="/category/addCategory"
                    className={`text-[15px] p-2 w-full block rounded ${isActive("/category/addCategory") ? "text-[#3d7754] bg-[#3d775429]" : "text-gray-700 hover:text-[#3d7754] hover:bg-[#3d775429]"}`}
                  >
                    Add Category
                  </Link>
                </li>
                <li className="rounded">
                  <Link
                    href="/category/categoryList"
                    className={`text-[15px] p-2 w-full block rounded ${isActive("/category/categoryList") ? "text-[#3d7754] bg-[#3d775429]" : "text-gray-700 hover:text-[#3d7754] hover:bg-[#3d775429]"}`}
                  >
                    Category Listing
                  </Link>
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
        </ul>
      </div>
    </div>
  );
}
