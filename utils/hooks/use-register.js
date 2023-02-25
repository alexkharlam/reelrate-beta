import { useState } from "react";
import { WEB_API_KEY } from "../config/firebase-api";

export const useRegister = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = async function (type, email, password) {
    try {
      setIsLoading(true);
      setError(null);
      console.log("sending request");
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:${
          type === "register" ? "signUp" : "signInWithPassword"
        }?key=${WEB_API_KEY}`,
        {
          method: "POST",
          "Content-Type": "application/json",
          body: JSON.stringify({
            returnSecureToken: true,
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (!response.ok) throw new Error(data.error.message);

      return data;
    } catch (error) {
      setError("something wrong");
      setIsLoading(false);
      console.error("💥" + error.message);
    }
  };

  return {
    sendRequest,
    error,
    isLoading,
  };
};
