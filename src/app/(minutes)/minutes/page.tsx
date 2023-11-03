"use client";

import * as React from "react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { useState } from "react";

export default function MinutesPage() {
  const [message, setMessage] = useState("");
  // const onSuccess = ({ key }) => {
  //   setMessage(`Key: ${key}`);
  // };

  return (
    <>
      <StorageManager // onSuccess={onSuccess}
        acceptedFileTypes={["image/*"]}
        accessLevel="public"
        maxFileCount={5}
      />
      {message}
    </>
  );
}
