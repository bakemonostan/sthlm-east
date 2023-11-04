"use client";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { redirect } from "next/navigation";
import FolderCard from "../cards/FolderCard";

type folders = {
  folders: string[];
};

export default function Board({ folders }: folders) {
  return (
    <div className="">
      <div className=" w-full flex flex-col  items-center gap-8 md:flex-row ">
        {folders.map((folder, index) => (
          <FolderCard key={index} label={folder.toUpperCase()} />
        ))}
      </div>

      <div></div>
    </div>
  );
}
