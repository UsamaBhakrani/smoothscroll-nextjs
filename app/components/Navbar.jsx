import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between sticky top-0 h-10">
      <div>LOGO</div>
      <div>
        <ul className="flex flex-row">
          <li>
            <Link href="#section-1" data-to-scrollspy-id="section-1">
              Section 1
            </Link>
          </li>
          <li>
            <Link href="#section-2" data-to-scrollspy-id="section-2">
              Section 2
            </Link>
          </li>
          <li>
            <Link href="#section-3" data-to-scrollspy-id="section-3">
              Section 3
            </Link>
          </li>
          <li>
            <Link href="#section-4" data-to-scrollspy-id="section-4">
              Section 4
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
