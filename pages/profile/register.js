import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Register from "@/components/auth/register/Register";

function RegisterPage() {
  const router = useRouter();
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  if (isAuthed) router.replace("/");

  return <Register />;
}

export default RegisterPage;
