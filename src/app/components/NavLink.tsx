import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: JSX.Element;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`py-3 px-4 rounded flex gap-2 items-center transition-colors duration-200 ${
        pathname === href
          ? "bg-jellybean-300 text-black"
          : "text-gray-700 hover:bg-gray-200"
      }`}
    >
      {icon} {name}
    </Link>
  );
}
