import { useSelector } from "react-redux";

export const useRate = function () {
  const auth = useSelector((state) => state.auth);
  const { idToken, localId } = auth;

  const sendRequest = async function ({ title, imgPath, id, rate }) {
    const url = `https://reelrate-beta.firebaseio/users/${localId}/rates/${id}.json?access_token=${idToken}`;

    try {
      console.log(title, imgPath, id, rate, idToken, localId);
      const response = await fetch(url, {
        method: "POST",
        headers: { "Conent-Type": "application.json" },
        body: JSON.stringify({ id, title, imgPath, rate }),
      });

      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    sendRequest,
  };
};
