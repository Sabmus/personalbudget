import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <span>
        <Link to={"/"}>logo</Link>
      </span>
      <div>
        <span>
          <Link to={"login"}>login</Link>
        </span>
        {/* remove blank space */}{" "}
        <span>
          <Link to={"register"}>register</Link>
        </span>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
