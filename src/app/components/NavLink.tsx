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
      className={`py-2 px-3 rounded flex gap-2 items-center ${
        pathname === href
          ? "bg-jellybean-500 text-white font-semibold"
          : "text-black"
      }`}
    >
      {icon} {name}
    </Link>
  );
}
