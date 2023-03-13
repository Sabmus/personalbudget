import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h2>Hello world</h2>
      <ul>
        <li>
          <Link to={"login"}>Login</Link>
        </li>
        <li>
          <Link to={"register"}>Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Landing;
