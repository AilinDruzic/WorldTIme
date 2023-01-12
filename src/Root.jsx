import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
    <nav className="flex justify-between p-8 bg-blue-400 items-center">
      <h1 className="text-4xl font-extrabold text-white">World Time</h1>

      <ul className="flex space-x-4 text-white font-extrabold">
        <li> 
          <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/about"}>About</Link>
        </li>
        <li>
        <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
    <main className="p-8">
      <Outlet />
    </main>
  </div>
  );
}