import Image from "next/image";
import Link from "next/link";
import images from "./ImageCon";

export default function Navbar() {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center">
          <div className="mt-7" href="/">
            <Image src={images.gallery} alt='' />
            </div>

          <div className="flex flex-1 items-center justify-end md:justify-end">
            <div className="flex items-center gap-5">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      href="/contact"
                      className="block rounded-md bg-green-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
