import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Learn
      </Link>
      <ul>
        <li className="active">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/test1">Test1</Link>
        </li>
        <li>
          <Link to="/test2">Test2</Link>
        </li>
        <li>
          <Link to="/test3">Test3</Link>
        </li>
        <li>
          <Link to="/test4">Test4</Link>
        </li>
      </ul>
    </nav>
  );
}
