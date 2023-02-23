import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function LoginPage() {
  const router = useRouter();
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  if (isAuthed) router.replace("/");

  return <div>LoginPage</div>;
}

export default LoginPage;
