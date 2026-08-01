import { NavLink } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function HoverText({ text }) {
  return (
    <span className="inline-block transition delay-150 duration-200 ease-in-out hover:scale-110  cursor-default">
      {text}
    </span>
  );
}

export default function Navbar() {
  return (
    <div className="navbar w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] py-4   ">
      <ul className="flex  justify-between px-10">
        <span className="font-bold text-lg">EARL</span>
        <div className="flex items-center gap-8 px-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path}>
              <HoverText text={link.name}/>
            </NavLink>
          ))}
        </div>
      </ul>
    </div>
  );
}
