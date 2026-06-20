'use client';

import { motion } from 'framer-motion';
import { useActionState, useRef, useEffect } from 'react';
import { sendMail, type FormState } from '@/actions/sendMail';

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(sendMail, {
    success: false,
    message: '',
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full"
    >
      <form ref={formRef} action={formAction} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="flex h-11 w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex h-11 w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div>
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="flex w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[100px]"
          />
        </div>

        {state.message && (
          <p
            className={`text-sm ${
              state.success ? 'text-emerald-500' : 'text-red-500'
            }`}
          >
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition-transform hover:translate-y-[-2px] active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
}
