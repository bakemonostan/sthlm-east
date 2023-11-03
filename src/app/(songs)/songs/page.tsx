import FolderCard from "@/components/cards/FolderCard";

export default function SongPage() {
  return (
    <div className=" w-full flex flex-col  items-center gap-8 md:flex-row ">
      <FolderCard
        folderSize="10 GB"
        numberOfFiles="20 files"
        path="/"
        label="Tenor"
      />
      <FolderCard
        folderSize="10 GB"
        numberOfFiles="20 files"
        path="/"
        label="Alto"
      />

      <FolderCard
        folderSize="10 GB"
        numberOfFiles="20 files"
        path="/"
        label="Soprano"
      />
    </div>
  );
}
