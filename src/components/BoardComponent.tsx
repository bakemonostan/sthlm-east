"use client";

import PleaseLogin from "@/components/PleaseLogin";
import Board from "@/components/routes/Board";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

export default function BoardComponent() {
  const [folders, setFolders] = useState<any>([]);
  async function getItems() {
    try {
      const file = await Storage.list("", {});
      console.log(file.results);
      const filteredResults = file.results.filter(
        (item) => item.key && item.key.trim() !== ""
      ); // Filter out empty strings
      const uniqueFolders = Array.from(
        new Set(filteredResults.map((item) => item.key?.split("/")[0]))
      ); // Get unique items

      setFolders(uniqueFolders);
    } catch (error) {
      console.error("Error retrieving items:", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  const { route } = useAuthenticator((context) => [context.route]);
  return (
    <>
      {route === "authenticated" ? (
        <Board folders={folders} />
      ) : (
        <PleaseLogin />
      )}
    </>
  );
}
