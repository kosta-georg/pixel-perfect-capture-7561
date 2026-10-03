import { createFileRoute } from "@tanstack/react-router";
import { Pickaxe, Landmark, MapPinned, BookOpen, ShieldCheck, Award, FileCheck2, Clock, Phone, Mail, Send, MapPin } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ИКЭ — Историко-культурная экспертиза в Казахстане" },
      { name: "description", content: "Археологическая и архитектурная экспертиза для застройщиков. От полевых работ до Заключения госоргана." },
      { property: "og:title", content: "ИКЭ — Историко-культурная экспертиза" },
      { property: "og:description", content: "Быстро, официально, без рисков для проекта. Работаем строго по лицензии." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo({ className = "h-9 w-9" }: { className?: string }) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 48 48" className={`${className} text-gold`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {rays.map((a) => (
        <line key={a} x1="24" y1="3" x2="24" y2="8" transform={`rotate(${a} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="12" />
      <path d="M24 24c0-2 2-3 3.5-2s1.5 4-1 5.5-6 0-6.5-3.5 2-7 6-7.5 8 3 8 7" />
    </svg>
  );
}

const nav = [
  ["Услуги", "#services"],
  ["О нас", "#about"],
  ["Законы", "#laws"],
  ["Контакты", "#contacts"],
];

const services = [
  { icon: Pickaxe, t: "Археологическая экспертиза", d: "Полевые исследования, шурфовка и разведка объектов археологического наследия на участке." },
  { icon: Landmark, t: "Архитектурная экспертиза", d: "Оценка зданий и сооружений, имеющих историко-архитектурную ценность." },
  { icon: MapPinned, t: "Экспертиза земельных участков", d: "Проверка участка перед строительством для исключения рисков остановки проекта." },
  { icon: BookOpen, t: "Научное сопровождение", d: "Археологический надзор и научное сопровождение на всех этапах строительных работ." },
];

const why = [
  { icon: ShieldCheck, t: "Лицензированные партнеры", d: "Работаем с организациями, имеющими государственную лицензию." },
  { icon: Award, t: "Опытные аттестованные археологи", d: "Специалисты с многолетней полевой практикой." },
  { icon: FileCheck2, t: "Гарантия прохождения госорганов", d: "Документация готовится в строгом соответствии с требованиями." },
  { icon: Clock, t: "Соблюдение сроков", d: "Фиксированные сроки в договоре — стройка не простаивает." },
];

const laws = [
  "Закон РК «Об охране и использовании объектов историко-культурного наследия» от 26.12.2019 № 288-VI",
  "Земельный кодекс Республики Казахстан",
  "Правила проведения историко-культурной экспертизы, утв. уполномоченным органом",
];

const btnGold = "inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90";
const btnGhost = "inline-flex items-center justify-center rounded-sm border border-navy-foreground/40 px-6 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-navy-foreground/10";

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-navy-foreground/10 bg-navy/95 text-navy-foreground backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <a href="#" className="flex items-center gap-3">
            <Logo />
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-wide">ИКЭ</span>
              <span className="hidden text-xs text-navy-foreground/70 sm:block">Историко-Культурная Экспертиза</span>
            </span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-navy-foreground/80 transition hover:text-gold">{l}</a>
            ))}
          </nav>
          <a href="#contacts" className={btnGold}>Оставить заявку</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Историческое городище в степи Казахстана" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Республика Казахстан · B2B</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Историко-культурная экспертиза для застройщиков в Казахстане.
            <span className="mt-2 block text-gold">Быстро, официально, без рисков для проекта.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-navy-foreground/80">
            Мы берем на себя все этапы — от полевых работ до получения Заключения госоргана. Работаем строго по лицензии.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contacts" className={btnGold}>Заказать экспертизу</a>
            <a href="#contacts" className={btnGhost}>Узнать стоимость</a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead k="01" t="Наши услуги" />
        <div className="grid gap-px overflow-hidden rounded-sm border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: I, t, d }) => (
            <div key={t} className="bg-background p-8">
              <I className="h-8 w-8 text-gold" strokeWidth={1.5} />
              <h3 className="mt-6 text-lg font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead k="02" t="Почему мы?" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({ icon: I, t, d }) => (
              <div key={t} className="border-t-2 border-gold pt-6">
                <I className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                <h3 className="mt-4 font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="laws" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead k="03" t="Законодательная база" />
        <ul className="divide-y border-y">
          {laws.map((l, i) => (
            <li key={l} className="flex gap-6 py-5">
              <span className="font-mono text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-2xl font-bold leading-snug md:text-3xl">
            Не останавливайте стройку из-за бюрократии. <span className="text-gold">Получите консультацию эксперта за 5 минут.</span>
          </h2>
          <a href="tel:+77000000000" className={btnGold}>Получить консультацию</a>
        </div>
      </section>

      <footer id="contacts" className="border-t border-navy-foreground/10 bg-navy text-navy-foreground/75">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 text-navy-foreground"><Logo className="h-8 w-8" /><span className="font-bold">ИКЭ</span></div>
            <p className="mt-4 text-sm">Историко-Культурная Экспертиза</p>
            <p className="mt-2 text-sm">Лицензия № ______ от __.__.____</p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="flex gap-2"><MapPin className="h-4 w-4 text-gold" /> г. Астана, ул. ________, офис __</p>
            <p className="flex gap-2"><Phone className="h-4 w-4 text-gold" /> +7 (700) 000-00-00</p>
            <p className="flex gap-2"><Mail className="h-4 w-4 text-gold" /> info@ike.kz</p>
          </div>
          <div className="text-sm md:text-right">
            <div className="flex gap-3 md:justify-end">
              {[Send, Phone, Mail].map((I, i) => (
                <a key={i} href="#" aria-label="Контакт" className="rounded-sm border border-navy-foreground/20 p-2 transition hover:border-gold hover:text-gold"><I className="h-4 w-4" /></a>
              ))}
            </div>
            <a href="#" className="mt-4 block hover:text-gold">Политика конфиденциальности</a>
            <p className="mt-2">© {new Date().getFullYear()} ИКЭ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ k, t }: { k: string; t: string }) {
  return (
    <div className="mb-14 flex items-baseline gap-4">
      <span className="font-mono text-sm text-gold">{k}</span>
      <h2 className="text-3xl font-bold md:text-4xl">{t}</h2>
    </div>
  );
}
