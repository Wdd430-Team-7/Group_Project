import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="relative flex flex-1 flex-shrink-0 justify-end">
      <Link href={'/dashboard'}>
        <UserCircleIcon className="w-6 dark:text-amber-500" />
      </Link>
    </div>
  );
}
