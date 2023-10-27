import FolderCard from "@/components/cards/FolderCard";

export default function page() {
  return (
    <div className=" w-full flex flex-col  items-center gap-5 md:flex-row ">
      <FolderCard
        folderSize="10 GB"
        numberOfFiles="20 files"
        path="/"
        label="Folder 1"
      />
      <FolderCard
        folderSize="10 GB"
        numberOfFiles="20 files"
        path="/"
        label="Folder 1"
      />

      <FolderCard
        folderSize="10 GB"
        numberOfFiles="20 files"
        path="/"
        label="Folder 1"
      />
    </div>
  );
}
