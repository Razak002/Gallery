import Image from "next/image";
import Link from "next/link";
import images from "./ImageCon";

export default function Navbar() {
  return (
    <>
      <header className="bg-white cursor-pointer">
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

            <div className="block md:hidden mt-7">
              <Image src={images.coms} alt="" width={60} height={60} />
            </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
