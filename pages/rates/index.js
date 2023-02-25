import CenteredMessage from "@/components/ui/CenteredMessage";
import { useSelector } from "react-redux";

function RatesPage() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthed);
  if (!isLoggedIn)
    return <CenteredMessage message={"Please login to use rates feature :)"} />;

  return <div>RatesPage</div>;
}

export default RatesPage;
