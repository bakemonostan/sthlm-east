"use client";
import { useAuthStore } from "@/hooks/use-auth-store";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, Hub } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import awsconfig from "@/aws-exports";
import { X } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
Amplify.configure(awsconfig);

const components = {
  SignIn: {
    Header() {
      const { showSignInModal } = useAuthStore();
      return (
        <div className="relative ">
          <h1 className="font-semibold  text-xl py-3 text-center flex-1">
            Sign in as an Admin
          </h1>
          <X
            className="cursor-pointer absolute right-5 top-1 translate-y-2/4  "
            onClick={() => {
              useAuthStore.setState({ showSignInModal: false });
            }}
          />
        </div>
      );
    },
  },
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showSignInModal } = useAuthStore();

  if (showSignInModal) {
    return (
      <Authenticator
        components={components}
        hideSignUp={true}
        className="h-screen bg-slate-500"
      >
        {children}
      </Authenticator>
    );
  } else {
    return <Authenticator.Provider>{children}</Authenticator.Provider>;
  }
}

{
  /* <main>
{files.map((file: any) => {
  const extension = file.key.split(".").pop().toLowerCase();
  if (["jpg", "png", "gif"].includes(extension)) {
    setFileType("image");
  } else if (extension === "pdf") {
    setFileType("pdf");
  } else if (["mp4", "webm", "avi"].includes(extension)) {
    setFileType("video");
  }
  <p
    key={file.key}
    onClick={() => {
      downloadFile(file.key);
    }}
  >
    {file.key.split("/").pop()}
    {fileType === "image" && (
      <StorageImage
        imgKey={file.key}
        accessLevel="public"
        alt={file.key}
      />
    )}
  </p>;
})}
</main> */
}
