"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import DotsIcon from "../icons/DotsIcon";
import FolderIcon from "../icons/FolderIcon";
import Link from "next/link";

type FolderCardProps = {
  path?: string;
  label: string;
  numberOfFiles: string;
  folderSize: string;
};

export default function FolderCard({
  path,
  label,
  numberOfFiles,
  folderSize,
}: FolderCardProps) {
  return (
    <Card className="max-w-[20rem] w-full flex-1  p-3 px-4">
      <Link href={path ?? "/"} className=" space-y-2">
        <CardHeader className="flex items-center  justify-between p-0">
          <div>
            <FolderIcon />
          </div>
          <div className="cursor-pointer">
            <DotsIcon width={20} height={20} />
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <p>{label}</p>
        </CardBody>
        <CardFooter className="w-full flex justify-between items-center p-0">
          <span>
            <p>{numberOfFiles}</p>
          </span>
          <span>
            <p>{folderSize}</p>
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
}
