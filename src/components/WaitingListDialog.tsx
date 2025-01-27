"use client";

import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import { EmailSignupForm } from "@/forms";
import { useState } from "react";

export function WaitingListDialog() {
    const [open, setOpen] = useState(false);
  
    const handleSubmissionSuccess = () => {
      setOpen(false);
    }
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
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
  
          <EmailSignupForm onSuccess={handleSubmissionSuccess} />
        </DialogContent>
      </Dialog>
    )
  }