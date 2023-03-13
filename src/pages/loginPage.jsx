import { useState } from "react";

const initialState = {
  fields: {
    username: "",
    password: "",
  },
  fieldErrors: {},
};

const LoginPage = () => {
  const [formState, setFormState] = useState(initialState);

  const validateForm = (fields) => {
    const errors = {};
    if (!fields.username) errors.username = "Username required";
    if (!fields.password) errors.password = "Password required";
    return errors;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const fields = formState.fields;
    const fieldErrors = validateForm(fields);
    setFormState({ ...formState, fieldErrors });
    if (Object.keys(fieldErrors).length) return;

    console.log("form submitted");
  };

  const onInputChange = (event) => {
    const fields = Object.assign({}, formState.fields);
    fields[event.target.name] = event.target.value;
    setFormState({ ...formState, fields });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          name="username"
          placeholder="Username"
          value={formState.fields.username}
          onChange={onInputChange}
        />
        <span style={{ color: "red" }}>{formState.fieldErrors.username}</span>

        <input
          name="password"
          placeholder="Password"
          value={formState.fields.password}
          onChange={onInputChange}
        />
        <span style={{ color: "red" }}>{formState.fieldErrors.password}</span>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
