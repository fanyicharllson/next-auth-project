import React from "react";
import { Button } from "./button";

interface GoogleSignInButtonProps {
  children: React.ReactNode;
}

export default function GoogleSignInButton({
  children,
}: GoogleSignInButtonProps) {
  const loginWithGoogle = async () => {
    console.log("login with google");
  };
  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
}
