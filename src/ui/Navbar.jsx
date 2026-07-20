

export default function Navbar() {
  return (
    <div className="navbar w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] py-4   ">
      <ul className="flex  gap-10 justify-between px-10 ">
        <li className="font-bold text-lg">EARL</li>
        <li className="flex gap-10">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/Login">Login</a>
        </li>
      </ul>
    </div>
  );
}
