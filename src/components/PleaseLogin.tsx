import { useAuthStore } from "@/hooks/use-auth-store";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "@nextui-org/react";

export default function PleaseLogin() {
  const { user } = useAuthenticator((context) => [context.route]);
  return (
    <div className="py-10 flex gap-28 items-center md:items-start md:justify-between flex-col h-full ">
      <h1 className="text-xl">
        Sorry, you need to be logged in as an admin to view this page 😢
      </h1>
      <div>
        {!user && (
          <Button
            className="  bg-secondary-500 text-white font-semibold"
            onClick={() => useAuthStore.setState({ showSignInModal: true })}
          >
            Sign in as an admin
          </Button>
        )}
      </div>
    </div>
  );
}
