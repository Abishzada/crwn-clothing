import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import "./sign-in.scss"

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <div>
        <SignInForm />
      </div>
      <div>
        {/* <h1>Sing in page</h1> */}
        {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;
