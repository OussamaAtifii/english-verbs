import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

// Interfaz para las props del componente
interface NavLinkProps {
  name: string;
  href: string;
  icon: JSX.Element;
}

const NavLink: FC<NavLinkProps> = ({ name, href, icon }) => {
  const pathname = usePathname();

  // Función para determinar las clases dinámicas
  const getLinkClasses = () => {
    const isActive = pathname === href;
    return `py-3 px-4 rounded flex gap-2 items-center ${
      isActive
        ? "bg-jellybean-300 text-black"
        : "text-gray-700 hover:bg-gray-200"
    }`;
  };

  return (
    <Link
      href={href}
      className={getLinkClasses()}
      aria-current={pathname === href ? "page" : undefined}
    >
      {icon} {name}
    </Link>
  );
};

export default NavLink;
