import Link from "next/link";
import Image from "next/image";
import logo from "@/logo2.png";
import { faInstagram, faSquareFacebook, faSquarePinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='w-full max-w-2xl text-center flex flex-col items-center justify-center gap-24'>
        <Image src={logo} alt="Paradox Intimates" width={994} height={255} className='px-2' />

        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl font-bold text-white">COMING SOON</h2>
          <WaitingListDialog/>
        </div>

        <div className="text-white flex gap-8 w-full items-center justify-center">
          <Link href="https://www.facebook.com/paradoxintimates" className='w-10 h-10'>
            <FontAwesomeIcon icon={faSquareFacebook}  />
          </Link>
          <Link href="https://www.instagram.com/paradoxintimates" className='w-10 h-10'>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://www.twitter.com/paradoxintimates" className='w-10 h-10'>
            <FontAwesomeIcon icon={faSquarePinterest} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function WaitingListDialog() {
  return (
    <Dialog>
      <DialogTrigger className="bg-white text-black rounded-sm px-8 py-2 hover:bg-gray-100 text-xl">
        NOTIFY ME
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-center w-full">
          <DialogTitle className='text-center'>
            JOIN WAITLIST & NOTIFY ME
          </DialogTitle>
        </DialogHeader>

        <p className="text-center">
          Provide your email to be notified of our next release.
        </p>

        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" />
          <div className='flex items-center justify-center'>
            <button type="submit" className="bg-accent text-white rounded-sm px-8 py-2">
              SUBMIT
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}