import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CenteredMessage from "@/components/ui/CenteredMessage";
import Authenticate from "@/components/auth/auth/Authenticate";

function RegisterPage() {
  const router = useRouter();
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  if (isAuthed) return <CenteredMessage message="You are logged in!" />;

  return <Authenticate type="register" />;
}

export default RegisterPage;