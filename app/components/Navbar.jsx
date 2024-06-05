import Link from "next/link";

const Navbar = () => {
  const links = [
    { label: "Section 1", href: "section-1" },
    { label: "Section 2", href: "section-2" },
    { label: "Section 3", href: "section-3" },
    { label: "Section 4", href: "section-4" },
  ];
  return (
    <nav className="flex justify-between sticky top-0 h-10">
      <div>LOGO</div>
      <div>
        <ul className="flex flex-row">
          {links.map(({ href, label }) => {
            return (
              <li key={href}>
                <Link href={`#${href}`} data-to-scrollspy-id={href}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
