import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "submitting" | "success" | "error";

export function FeedbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim() || null;
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !phone || !message) {
      setStatus("error");
      setErrorMsg("Заполните имя, телефон и сообщение.");
      return;
    }

    const { error } = await supabase.from("feedback_submissions").insert({
      name,
      phone,
      email,
      message,
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Не удалось отправить заявку. Попробуйте позже или свяжитесь по телефону.");
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gold/40 bg-charcoal p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold" strokeWidth={1.5} />
        <p className="mt-4 text-lg font-semibold text-charcoal-foreground">
          Заявка отправлена
        </p>
        <p className="mt-2 text-sm text-charcoal-foreground/70">
          Мы свяжемся с вами в ближайшее время.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-sm border border-charcoal-foreground/40 px-6 py-2 text-sm font-semibold text-charcoal-foreground transition hover:border-gold hover:text-gold"
        >
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="fb-name" className="mb-2 block text-sm font-medium text-charcoal-foreground/80">
          Имя <span className="text-gold">*</span>
        </label>
        <input
          id="fb-name"
          name="name"
          type="text"
          required
          disabled={status === "submitting"}
          className="w-full rounded-sm border border-charcoal-foreground/20 bg-charcoal/50 px-4 py-3 text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/40 transition focus:border-gold focus:outline-none disabled:opacity-50"
          placeholder="Ваше имя"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fb-phone" className="mb-2 block text-sm font-medium text-charcoal-foreground/80">
            Телефон <span className="text-gold">*</span>
          </label>
          <input
            id="fb-phone"
            name="phone"
            type="tel"
            required
            disabled={status === "submitting"}
            className="w-full rounded-sm border border-charcoal-foreground/20 bg-charcoal/50 px-4 py-3 text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/40 transition focus:border-gold focus:outline-none disabled:opacity-50"
            placeholder="+7 (700) 000-00-00"
          />
        </div>
        <div>
          <label htmlFor="fb-email" className="mb-2 block text-sm font-medium text-charcoal-foreground/80">
            Email
          </label>
          <input
            id="fb-email"
            name="email"
            type="email"
            disabled={status === "submitting"}
            className="w-full rounded-sm border border-charcoal-foreground/20 bg-charcoal/50 px-4 py-3 text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/40 transition focus:border-gold focus:outline-none disabled:opacity-50"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="fb-message" className="mb-2 block text-sm font-medium text-charcoal-foreground/80">
          Сообщение <span className="text-gold">*</span>
        </label>
        <textarea
          id="fb-message"
          name="message"
          required
          rows={4}
          disabled={status === "submitting"}
          className="w-full rounded-sm border border-charcoal-foreground/20 bg-charcoal/50 px-4 py-3 text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/40 transition focus:border-gold focus:outline-none disabled:opacity-50"
          placeholder="Опишите объект и территорию, нуждающуюся в экспертизе"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-sm border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          "Отправить заявку"
        )}
      </button>
    </form>
  );
}
