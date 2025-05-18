import React from "react";
import { Home, FileText, Settings, LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

const links = [
  { name: "Dashboard", icon: Home, to: "/" },
  { name: "Articles", icon: FileText, to: "/articles" },
  { name: "Settings", icon: Settings, to: "/settings" },
];

const Sidebar = () => {
  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden p-4">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] p-4">
            <Nav />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-[250px] border-r p-4 flex-col">
        <Nav />
      </div>
    </>
  );
};

const Nav = () => (
  <>
    <div className="flex text-xl font-bold mb-6"><img className="relative inline-block mr-2 h-8 w-8 !rounded-full object-cover object-center" src={avatar} alt="avatar" /><h4>Ravi Bhaskar</h4></div>
    <nav className="flex flex-col gap-2">
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-purple-100 ${
              isActive ? "font-semibold bg-purple-200" : "hover:bg-muted"
            }`
          }
        >
          <link.icon className="h-5 w-5" />
          {link.name}
        </NavLink>
      ))}
    </nav>
    <div className="mt-auto flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
      <LogOut className="h-4 w-4" /> Logout
    </div>
  </>
);

export default Sidebar;
