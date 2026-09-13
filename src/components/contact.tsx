import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { inquiryTypes, person, type InquiryType } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Enter a valid email."),
  inquiry: z.enum(inquiryTypes),
  message: z
    .string()
    .trim()
    .min(12, "A little more context helps — twelve characters at least."),
});

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [inquiry, setInquiry] = useState<InquiryType>("Brand");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      name: String(new FormData(form).get("name") ?? ""),
      email: String(new FormData(form).get("email") ?? ""),
      inquiry,
      message: String(new FormData(form).get("message") ?? ""),
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const next: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (key === "name" || key === "email" || key === "message") {
          next[key] = issue.message;
        }
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSending(false);
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-caps text-clay">
            04 — Commission
          </p>
          <h2 className="mt-3 font-display text-title font-medium text-ink">
            Start a project
          </h2>
          <p className="mt-5 max-w-md text-lede text-clay">
            Tell me what you are making. I read every note, and I reply within a
            few days if it looks like a fit.
          </p>
          <a
            href={`mailto:${person.email}`}
            className="mt-8 inline-block font-display text-xl text-ink underline-offset-4 hover:underline"
          >
            {person.email}
          </a>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="rounded-xl bg-stone px-6 py-10">
              <p className="font-display text-2xl text-ink">Message received.</p>
              <p className="mt-3 max-w-md text-clay">
                Thank you. I will write back at the address you left if the
                project is a match.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-8"
                onClick={() => setSent(false)}
              >
                Write another
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  error={errors.name}
                >
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@studio.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                </Field>
              </div>

              <fieldset>
                <legend className="text-xs font-medium uppercase tracking-caps text-clay">
                  I am writing about
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => {
                    const active = inquiry === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setInquiry(type)}
                        className={cn(
                          "min-h-11 rounded-full px-4 text-sm transition-[background-color,color] duration-150 ease-out",
                          active
                            ? "bg-ink text-paper"
                            : "bg-stone text-clay hover:text-ink",
                        )}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <Field id="message" label="Message" error={errors.message}>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What are you making, and when?"
                  aria-invalid={Boolean(errors.message)}
                />
              </Field>

              <Button type="submit" disabled={sending}>
                {sending ? "Sending…" : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p className="text-sm text-oxblood" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
