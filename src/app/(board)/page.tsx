"use client";

import PleaseLogin from "@/components/PleaseLogin";
import Board from "@/components/routes/Board";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Home() {
  const { route } = useAuthenticator((context) => [context.route]);
  return <>{route === "authenticated" ? <Board /> : <PleaseLogin />}</>;
}
