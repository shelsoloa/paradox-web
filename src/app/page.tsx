import Link from "next/link";
import Image from "next/image";
import logo from "@/logo2.png";
// import { Facebook } from "lucide-react";
// import { Instagram } from "lucide-react";np
// import { Pinterest } from "lucide-react";
import { faInstagram, faSquareFacebook, faSquarePinterest } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

{/* <FontAwesomeIcon icon="fa-brands fa-square-facebook" /> */}
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='w-full max-w-2xl text-center flex flex-col items-center justify-center gap-8'>
        <Image src={logo} alt="Paradox Intimates" width={994} height={255} />

        <h2 className="text-2xl font-bold text-white">COMING SOON</h2>

        <Link 
          href="/contact" 
          className="bg-white text-black rounded-full px-8 py-2 hover:bg-gray-100"
        >
          NOTIFY ME
        </Link>

        <div className="text-white flex gap-8 w-full items-center justify-center">
          <Link href="https://www.facebook.com/paradoxintimates" className='w-10 h-10 text-black'>
            <FontAwesomeIcon icon={faSquareFacebook}  />
          </Link>
          <Link href="https://www.instagram.com/paradoxintimates" className='w-10 h-10 text-black'>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://www.twitter.com/paradoxintimates" className='w-10 h-10 text-black'>
            <FontAwesomeIcon icon={faSquarePinterest} />
          </Link>
        </div>
      </div>
    </div>
  );
}
