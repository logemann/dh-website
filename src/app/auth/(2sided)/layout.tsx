import Image from "next/image";
import LoginRegisterImage from "@/images/patterns/login-image3.png";
import LoginRegisterImage2 from "@/images/loginimage.png";
import Link from "next/link";

export default function TwoSidedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white px-4
                     md:flex-none md:px-28">
          <main className="grow mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0 pt-12">
            <div className="pb-28">
              <Link href="/" aria-label="Home" className="pb-1">
                LOGO
              </Link>
            </div>
            {children}
          </main>
          <div className="self-center justify-end flex-none pb-4 text-gray-400">
            <Link className="text-tertiary hover:underline hover:text-tertiary-700" href="/">Zur Homepage</Link> |
            {" "}<Link className="text-tertiary hover:underline hover:text-tertiary-700" href="">Impressum</Link> |
            {" "}<Link className="text-tertiary hover:underline hover:text-tertiary-700" href="">Datenschutz</Link>
          </div>
        </div>
        <div className="hidden md:contents lg:relative lg:block lg:flex-1">
          <div className="hidden lg:grid lg:grid-cols-1 lg:h-full lg:w-full">
            <Image
              className="row-span-full col-start-1 self-center inset-0 h-full object-cover w-full"
              src={LoginRegisterImage2}
              alt=""
              unoptimized
              priority={false}
            />
            <div className="row-span-full col-start-1 self-start mt-20 ml-10 mr-10 text-4xl">
              sdfsdf
            </div>
          </div>
          <Image
            className="lg:hidden absolute inset-0 h-full object-cover w-full"
            src={LoginRegisterImage}
            alt=""
            unoptimized
            priority={false}
          />
        </div>
      </div>
    </>
  );
}
