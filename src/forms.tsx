"use client";

import { useToast } from "@/hooks/use-toast";
import { signupForWaitlist } from "@/actions";

export function EmailSignupForm({ onSuccess }: { onSuccess: () => void }) {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { error } = await signupForWaitlist(formData);

    if (error) {
      toast({ title: "Error", description: error });
    } else {
      onSuccess();
      toast({
        description: "You are now signed up for the waitlist.",
      });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        className="rounded-sm border p-4 bg-stone-100"
        type="email"
        placeholder="Email"
        name="email"
      />
      <button
        className="border bg-accent text-white rounded-sm px-8 py-2"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
}