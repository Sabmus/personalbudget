import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <span>logo</span>
      <div>
        <span>
          <Link to={"login"}>login</Link>
        </span>
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
