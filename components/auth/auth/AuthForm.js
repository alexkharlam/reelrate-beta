import { authActions } from "@/store/authSlice";
import { useRegister } from "@/utils/hooks/use-register";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import styles from "./AuthForm.module.css";

function AuthForm({ type }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { sendRequest, isLoading, error } = useRegister();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const submitHandler = async function (e) {
    e.preventDefault();

    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;

    if (
      type === "register" &&
      (passwordInput !== confirmPasswordInputRef.current.value ||
        !emailInput ||
        !passwordInput)
    )
      return;

    const data = await sendRequest(type, emailInput, passwordInput);
    if (!data) return;
    dispatch(
      authActions.login({ localId: data.localId, idToken: data.idToken })
    );
    router.push("/");
  };

  return (
    <>
      {isLoading && <p className={styles.message}>loading...</p>}
      {error && <p className={styles.message}>{error}</p>}
      <form onSubmit={submitHandler} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          E-mail
        </label>
        <input
          ref={emailInputRef}
          className={styles.input}
          id="email"
          type="email"
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          ref={passwordInputRef}
          className={styles.input}
          id="password"
          type="password"
        />
        {type === "register" && (
          <>
            <label className={styles.label} htmlFor="password-confirm">
              Confirm password
            </label>
            <input
              ref={confirmPasswordInputRef}
              className={styles.input}
              id="password-confirm"
              type="password"
            />
          </>
        )}
        <button className={styles.submit} type="submit">
          {type === "register" ? "Create account" : "Login to ReelRate"}
        </button>
      </form>
    </>
  );
}

export default AuthForm;
