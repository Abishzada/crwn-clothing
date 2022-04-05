import FormInput from "../form-input/form-input";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const handleChange = () => {
    console.log("hey");
  };

  return (
    <div>
      <h2>I have already an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <label>Display Name</label>
        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          value=""
        />
        {/* <FormInput
          label="Display nam"
          type="text"
          required
          name="displayNam"
          value={displayName}
        ></FormInput> */}
      </form>
    </div>
  );
};

export default SignInForm;
