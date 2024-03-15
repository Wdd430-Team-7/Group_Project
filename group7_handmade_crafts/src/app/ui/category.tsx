import Link from "next/link";

interface CategoryProps {
    onClickEvent: () => void;
}

export default function Category({ onClickEvent }: CategoryProps) {
  return (
    // this will be turned into a link later on
    <Link
      href="/"
      className="bg-white px-4 py-2 rounded-md hover:bg-amber-200"
      onClick={onClickEvent}
    >
      Category
    </Link>
  );
}
