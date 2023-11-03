"use client";
import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { redirect } from "next/navigation";

export default function Board() {
  const { route } = useAuthenticator((context) => [context.route]);
  route !== "authenticated" && redirect("/minutes");
  return (
    <div className="">
      <div className=" w-full flex sm:flex-row flex-col-reverse justify-center sm:justify-between items-center gap-5">
        <Card className="max-w-[20rem] md:w-[25rem] lg:max-w-[28rem] flex flex-row border-none  bg-secondary-500">
          <CardBody className="w-1/3">
            <CircularProgress
              classNames={{
                svg: "md:w-24 md:h-24 w-16 h-16 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-xl md:text-3xl font-semibold text-white",
              }}
              value={70}
              strokeWidth={4}
              showValueLabel={true}
              disableAnimation={true}
            />
          </CardBody>
          <CardFooter className=" w-2/3 flex flex-col justify-center gap-3  items-start md:text-lg text-white font-bold text-left  pt-0">
            <p>Storage</p>
            <p>700 GB / 1000 GB</p>
          </CardFooter>
        </Card>

        <Button className="md:self-start rounded-sm bg-accent-500 text-white font-semibold md:w-36 ">
          View All Users
        </Button>
      </div>

      <div></div>
    </div>
  );
}
