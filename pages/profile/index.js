import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function ProfilePage() {
  const router = useRouter();
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  if (!isAuthed) router.replace("/profile/login");

  return <div>Your profile</div>;
}

export default ProfilePage;