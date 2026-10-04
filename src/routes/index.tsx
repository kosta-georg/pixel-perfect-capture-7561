import { createFileRoute } from "@tanstack/react-router";
import { Pickaxe, BookOpen, FileCheck2, Phone, Mail, Send, MapPin } from "lucide-react";
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
  ["О нас", "#about"],
  ["Законы", "#laws"],
  ["Экспертиза", "#services"],
  ["Контакты", "#contacts"],
];

const laws: { t: string; a?: string; p: (string | string[])[] }[] = [
  {
    t: "Закон Об охране и использовании объектов историко-культурного наследия от 26 декабря 2019 года № 288-VI ЗРК",
    a: "Статья 30",
    p: [
      "До отвода земельных участков под строительство проводятся археологические работы для выявления объектов наследия.",
      "В случае обнаружения ценных объектов физические и юридические лица обязаны:",
      ["приостановить работы,", "в течение трёх рабочих дней сообщить об этом уполномоченному органу и местным исполнительным органам."],
    ],
  },
  {
    t: "Земельный Кодекс РК",
    a: "Статья 127. Земли историко-культурного назначения",
    p: [
      "Землями историко-культурного назначения признаются земельные участки, занятые объектами историко-культурного наследия, в том числе памятниками истории и культуры.",
      "При освоении территорий до отвода земельных участков должны производиться археологические работы по выявлению объектов историко-культурного наследия в соответствии с законодательством Республики Казахстан.",
      "В случае обнаружения объектов, имеющих историческую, научную, художественную и культурную ценность, землепользователи обязаны приостановить дальнейшее ведение работ и сообщить об этом уполномоченному органу по охране и использованию объектов историко-культурного наследия.",
      "Запрещается проведение всех видов работ, которые могут создавать угрозу существованию объектов историко-культурного наследия.",
    ],
  },
  {
    t: "Правила проведения историко-культурной экспертизы",
    p: [
      "Историко-культурная экспертиза проводится в целях определения соответствия проектной документации требованиям законодательства Республики Казахстан об охране и использовании объектов историко-культурного наследия.",
      "Экспертиза осуществляется аттестованными экспертами до начала реализации строительных, земляных, мелиоративных и иных хозяйственных работ на исследуемом участке.",
      "По результатам проведенной экспертизы выдается официальное заключение установленного государственного образца, являющееся обязательным основанием для прохождения государственной экспертизы проектов и согласования в местных исполнительных органах.",
    ],
  },
];

const stages = [
  { icon: BookOpen, t: "Подготовительный этап", d: "Предварительная работа с архивными материалами, сводом памятников и государственным реестром, анализ карт местности, дешифровка снимков из космоса, ведомости координат участка и подготовка материально-технической базы." },
  { icon: Pickaxe, t: "Выезд на участок / полевые работы", d: "Визуальный осмотр земельного участка и прилегающей местности в пределах территории экспертизы, согласно предоставленной Заказчиком информации (карты-схемы участка, ведомости координат, полосы отвода и пр.), фотофиксация, документация, описание всех обнаруженных объектов ИКН, сбор подъемного материала, и описание находок (если таковые имеются)." },
  { icon: FileCheck2, t: "Заключительный этап", d: "Камеральная обработка полученных данных; составление научного отчета, включающего в себя описание зафиксированных объектов ИКН, координаты и чертежи расположения, фотоматериалы; составление Заключения археологической экспертизы; составление рекомендаций по охранным мероприятиям в отношении зафиксированных объектов ИКН." },
  { icon: Send, t: "Финал", d: "Получение согласования Заключения в местном исполнительном органе." },
];


const btnDark = "inline-flex items-center justify-center rounded-sm bg-charcoal px-6 py-3 text-sm font-semibold text-charcoal-foreground border border-charcoal-foreground/50 transition hover:border-gold hover:text-gold";
const btnGhost = "inline-flex items-center justify-center rounded-sm border border-charcoal-foreground/40 px-6 py-3 text-sm font-semibold text-charcoal-foreground transition hover:bg-charcoal-foreground/10";

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-charcoal-foreground/10 bg-charcoal/95 text-charcoal-foreground backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <a href="#" className="flex items-center gap-3">
            <Logo />
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-wide">ИКЭ</span>
              <span className="hidden text-xs text-charcoal-foreground/70 sm:block">Историко-Культурная Экспертиза</span>
            </span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-charcoal-foreground/80 transition hover:text-gold">{l}</a>
            ))}
          </nav>
          <a href="#contacts" className={btnDark}>Оставить заявку</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <img src={hero} alt="Историческое городище в степи Казахстана" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Республика Казахстан</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Историко-культурная экспертиза и археологические изыскания в Казахстане
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-charcoal-foreground/80">
            Проведение профессиональной историко-культурной экспертизы и комплексных археологических изысканий на всей территории Казахстана. Археологический надзор и полное научное сопровождение объектов строительства и недропользования. Все работы осуществляются аккредитованными специалистами лицензированных организаций, в строгом соответствии с утверждёнными методиками, законодательными актами и общепринятыми мировыми стандартами.
          </p>
          <blockquote className="mt-8 max-w-2xl border-l-2 border-gold pl-5 text-lg italic text-gold">
            «Сохраняем наследие великого прошлого, помогая созидать не менее великое будущее»
          </blockquote>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contacts" className={btnDark}>Заказать экспертизу</a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead k="01" t="Экспертность и стандарты отрасли" />
        <div className="grid gap-12 lg:grid-cols-3">
          <p className="text-lg leading-relaxed text-muted-foreground lg:col-span-2">
            Мы специализируемся на проведении комплексных историко-культурных и археологических экспертиз любой сложности для всех видов строительства и недропользования по всему Казахстану на протяжении 20 лет. За нашими плечами — более тысячи реализованных проектов различного масштаба. Мы сотрудничаем с ведущими специалистами в области археологии и архитектуры по всей стране, которые принимали непосредственное участие в создании профильных методик и составлении сводов памятников истории и культуры для большинства регионов республики. Кроме того, у нас налажены прямые рабочие контакты с местными исполнительными органами, отвечающими за охрану исторического наследия.
          </p>
          <div className="grid gap-px self-start overflow-hidden rounded-sm border bg-border">
            {[["20 лет", "на рынке экспертиз"], ["1000+", "реализованных проектов"]].map(([n, l]) => (
              <div key={n} className="bg-background p-8">
                <div className="text-4xl font-bold text-gold">{n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="laws" className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead k="02" t="Законодательная база" />
          <div className="divide-y border-y">
            {laws.map(({ t, a, p }, i) => (
              <article key={t} className="grid gap-6 py-10 md:grid-cols-[4rem_1fr]">
                <span className="font-mono text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold">{t}</h3>
                  {a && <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gold">{a}</p>}
                  <div className="mt-4 max-w-3xl space-y-3 leading-relaxed text-muted-foreground">
                    {p.map((x, j) =>
                      Array.isArray(x) ? (
                        <ul key={j} className="space-y-2 border-l-2 border-gold/60 pl-5">
                          {x.map((li) => <li key={li}>— {li}</li>)}
                        </ul>
                      ) : (
                        <p key={j}>{x}</p>
                      ),
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead k="03" t="Методика и этапы проведения экспертизы" />
        <div className="mx-auto max-w-3xl divide-y divide-charcoal-foreground/10 rounded-sm border border-charcoal-foreground/10">
          {stages.map(({ icon: I, t, d }, i) => (
            <div key={t} className="flex gap-6 bg-background p-8">
              <div className="flex w-10 shrink-0 flex-col items-center">
                <span className="font-mono text-sm text-gold">0{i + 1}</span>
                <I className="mt-2 h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Задачи:</span> {d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contacts" className="border-t border-charcoal-foreground/10 bg-charcoal text-charcoal-foreground/75">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 text-charcoal-foreground"><Logo className="h-8 w-8" /><span className="font-bold">ИКЭ</span></div>
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
                <a key={i} href="#" aria-label="Контакт" className="rounded-sm border border-charcoal-foreground/20 p-2 transition hover:border-gold hover:text-gold"><I className="h-4 w-4" /></a>
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
