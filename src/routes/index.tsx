import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Pickaxe, BookOpen, FileCheck as FileCheck2, Phone, Mail, MessageCircle, Send, ChevronDown } from "lucide-react";

const contactLinks = [
  { I: Phone, name: "Телефон", label: "+7 (777) 843-79-30", href: "tel:+77778437930" },
  { I: MessageCircle, name: "WhatsApp", label: "+7 (777) 843-79-30", href: "https://wa.me/77778437930" },
  { I: Mail, name: "Почта", label: "info@archexpertise.kz", href: "mailto:info@archexpertise.kz" },
];
import hero from "@/assets/hero.jpg";
import logoAsset from "@/assets/logo-dark-c5a059.png.asset.json";
import { Button } from "@/components/ui/button";
import { FeedbackForm } from "@/components/feedback-form";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Историко-культурная и археологическая экспертиза в Казахстане" },
      { name: "description", content: "Историко-культурная и археологическая экспертиза в Казахстане. Полный комплекс археологических изысканий и профильных научных исследований для объектов строительства и недропользования. Официальное заключение с согласованием в государственных органах." },
      { property: "og:title", content: "Историко-культурная и археологическая экспертиза в Казахстане" },
      { property: "og:description", content: "Историко-культурная и археологическая экспертиза в Казахстане: полевые исследования, составление научных отчётов, оформление заключений с согласованием." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Логотип ИКЭ" width={1024} height={1024} className={`${className} shrink-0 object-contain`} decoding="async" />;
}

const nav = [
  ["Эксперты", "#about"],
  ["Законы", "#laws"],
  ["Экспертиза", "#services"],
  ["Контакты", "#contacts"],
];

const laws: { t: string; a?: string; p: (string | string[])[] }[] = [
  {
    t: "Закон Республики Казахстан «Об охране и использовании объектов историко-культурного наследия» от 26 декабря 2019 года № 288-VI ЗРК",
    a: "Статья 30. Обеспечение сохранности объектов историко-культурного наследия при освоении территорий",
    p: [
      "При освоении территорий до отвода земельных участков должны производиться внеплановые (превентивные) археологические работы по выявлению объектов историко-культурного наследия в соответствии с законодательством Республики Казахстан об охране и использовании объектов историко-культурного наследия.",
      "По итогам проведения внеплановых (превентивных) археологических работ путем археологических разведок выдается заключение историко-культурной экспертизы.",
      "Физическое или юридическое лицо, проводившее историко-культурную экспертизу, уведомляет местные исполнительные органы о ее результатах путем направления копии заключения историко-культурной экспертизы в течение пяти рабочих дней со дня его выдачи.",
      "Заключение историко-культурной экспертизы, выданное по итогам проведения внеплановых (превентивных) археологических работ путем археологических разведок, является основанием для проведения внеплановых (превентивных) археологических работ путем археологических раскопок.",
      "Внеплановые (превентивные) археологические работы проводятся за счет физических и юридических лиц, осваивающих территории.",
      "В случае обнаружения объектов, имеющих историческую, научную, художественную и культурную ценность, физические и юридические лица обязаны приостановить дальнейшее ведение работ и в течение трех рабочих дней сообщить об этом уполномоченному органу и местным исполнительным органам областей, городов республиканского значения, столицы.",
      "Запрещается проведение работ, которые могут создавать угрозу существованию объектов историко-культурного наследия.",
    ],
  },
  {
    t: "Земельный кодекс Республики Казахстан от 20 июня 2003 года № 442-II",
    a: "Статья 127. Земли историко-культурного назначения",
    p: [
      "1. Землями историко-культурного назначения признаются земельные участки, занятые объектами историко-культурного наследия, в том числе памятниками истории и культуры.",
      "Собственники земельных участков и землепользователи не препятствуют проведению археологических работ.",
      "2. Земельные участки, отнесенные к землям историко-культурного назначения, у собственников земельных участков и землепользователей не изымаются, за исключением случаев, установленных законами Республики Казахстан.",
      "В целях обеспечения охраны памятников истории и культуры устанавливаются охранные зоны, зоны регулирования застройки и зоны охраняемого природного ландшафта на землях историко-культурного назначения в порядке, определяемом законодательством Республики Казахстан.",
      "Границы охранных зон, зон регулирования застройки и зон охраняемого природного ландшафта памятников истории и культуры утверждаются местными исполнительными органами областей, городов республиканского значения, столицы.",
      "Порядок определения указанных зон и режим использования земель в них определяются уполномоченным органом по охране и использованию объектов историко-культурного наследия.",
      "3. Нарушение режима использования земель в пределах охранных зон, зон регулирования застройки и зоны охраняемого природного ландшафта памятников истории и культуры влечет административную ответственность в соответствии с Кодексом Республики Казахстан об административных правонарушениях.",
    ],
  },
  {
    t: "Правила проведения историко-культурной экспертизы от 21 апреля 2020 года № 99",
    a: "Глава 1. Общие положения",
    p: [
      "2. Историко-культурная экспертиза — исследование, направленное на установление историко-культурной значимости и степени сохранности объекта историко-культурного наследия.",
      "3. Объектами историко-культурной экспертизы являются:",
      "1) материалы, полученные по итогам проведения внеплановых (превентивных) археологических работ на земельных участках, подлежащих освоению, обосновывающие наличие или отсутствие угрозы существующим объектам историко-культурного наследия.",
    ],
  },
];

function LawItem({ law, index }: { law: { t: string; a?: string; p: (string | string[])[] }; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyId = `law-body-${index}`;
  return (
    <article className="border-b border-gold">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((v) => !v)}
        className="w-full cursor-pointer px-2 py-6 text-left transition-colors duration-200 hover:bg-neutral-800/50"
      >
        <h3 className="text-xl font-bold text-foreground">{law.t}</h3>
        <div className="mt-3 flex items-center justify-between gap-4">
          {law.a ? (
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">{law.a}</p>
          ) : (
            <span />
          )}
          <ChevronDown
            size={20}
            aria-hidden="true"
            className={`shrink-0 text-gold transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <div
        id={bodyId}
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="max-w-3xl space-y-3 px-2 pb-8 leading-relaxed text-muted-foreground">
            {law.p.map((x, j) =>
              Array.isArray(x) ? (
                <ul key={j} className="space-y-2 border-l-2 border-gold pl-5">
                  {x.map((li) => <li key={li}>— {li}</li>)}
                </ul>
              ) : (
                <p key={j}>{x}</p>
              ),
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

const stages = [
  { icon: BookOpen, t: "Подготовительный этап", d: "Обработка данных о территории экспертизы, полученных от заказчика; анализ государственных списков и сводов памятников истории и культуры и других архивных материалов, имеющих отношение к территории экспертизы; работа с топографическими картами и снимками из космоса." },
  { icon: Pickaxe, t: "Полевой этап", d: "Визуальный осмотр и фотофиксация территории экспертизы; опрос местных жителей; фиксация на фотокамеру и GPS, измерение и описание выявленных объектов историко-культурного наследия, сбор подъёмного материала; в случае необходимости, на памятниках поселенческого типа для определения наличия культурного слоя, глубины его залегания и территории распространения закладываются разведывательные стратиграфические шурфы." },
  { icon: FileCheck2, t: "Камеральный этап", d: "Обработка данных, полученных в результате полевых работ; составление фотоотчёта о полном обследовании территории экспертизы; в случае выявления объектов историко-культурного наследия составляется научный отчёт, включающий в себя координаты и описание зафиксированных объектов, их фотографии и схемы расположения с охранными зонами (вместо схем допускается создание KML-файла со всеми данными)." },
  { icon: Send, t: "Финальный этап", d: "Подготовка и оформление итогового заключения историко-культурной (археологической) экспертизы; отправка заключения в местный исполнительный орган, отвечающий за охрану и использование объектов историко-культурного наследия, для официального согласования в установленные законом сроки; после получения согласования полный комплект документов (включая электронные версии и научный отчёт) передаётся заказчику." },
];


const btnDark = "h-auto whitespace-normal rounded-sm border border-gold bg-transparent px-6 py-3 text-sm font-semibold text-gold shadow-none hover:bg-gold hover:text-charcoal";

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-gold bg-charcoal/95 text-charcoal-foreground backdrop-blur">
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
          <Button asChild className={btnDark}><a href="#contacts">Оставить заявку</a></Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <img src={hero} alt="Историческое городище в степи Казахстана" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Республика Казахстан</p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            Историко-культурная и археологическая экспертиза в Казахстане
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal-foreground/80 md:text-lg">
            Проведение профессиональной историко-культурной и археологической экспертизы, а также комплексных археологических изысканий и профильных научных исследований на объектах строительства и недропользования по всей территории Казахстана. Археологический надзор и полное экспертно-методическое сопровождение проектов любой сложности. Составление научных отчётов и оформление официальных экспертных заключений с согласованием в государственных органах. Все работы осуществляются аккредитованными специалистами лицензированных организаций, в строгом соответствии с утверждёнными методиками, законодательными актами и общепринятыми мировыми стандартами.
          </p>
          <blockquote className="mt-5 max-w-2xl border-l-2 border-gold px-5 py-3 text-base italic text-gold md:text-lg">
            «Сохраняем наследие великого прошлого, помогая созидать не менее великое будущее»
          </blockquote>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild className={btnDark}><a href="#contacts">Заказать экспертизу</a></Button>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-14 text-3xl font-bold md:text-4xl">Эксперты и компетенции</h2>
        <div className="grid gap-12 lg:grid-cols-3">
          <p className="text-lg leading-relaxed text-muted-foreground lg:col-span-2">
            Мы специализируемся на проведении комплексных историко-культурных и археологических экспертиз любой сложности для всех видов строительства и недропользования по всему Казахстану. Наши эксперты имеют двадцатилетний опыт работ в археологии и реставрации, в полевых исследованиях и охранных мероприятиях. Принимали непосредственное участие в разработке методик проведения профильных экспертиз и внедрении современных стандартов фиксации, документации и реставрации памятников археологии и архитектуры. За их плечами более тысячи реализованных проектов различного масштаба и столько же выданных и согласованных заключений историко-культурной (археологической) экспертизы. Также мы сотрудничаем с ведущими специалистами в области истории, археологии, архитектуры и реставрации по всей стране, часть из которых имеют прямое отношение к составлению археологических карт, государственных списков и сводов памятников истории и культуры для своих регионов. Налажены прямые рабочие контакты с местными исполнительными органами, отвечающими за охрану историко-культурного наследия в каждой области.
          </p>
          <div className="grid gap-px self-start overflow-hidden rounded-sm border bg-border">
            {[["20 лет", "в археологии и экспертизе"], ["1000+", "реализованных проектов"], ["100%", "соблюдение законов РК"]].map(([n, l]) => (
              <div key={n} className="bg-background p-8">
                <div className="text-4xl font-bold text-gold">{n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="laws" className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-3xl font-bold md:text-4xl">Законодательство и правила</h2>
          <p className="mb-10 max-w-3xl text-lg text-gray-300">
            <span className="font-semibold">Историко-культурная и археологическая экспертиза</span> — обязательный этап согласования проектной документации при освоении земельных участков. В нормативных правовых актах используется официальный термин «историко-культурная экспертиза». Но в среде проектировщиков, исследователей и изыскателей данный вид работ называют «археологическая экспертиза».
          </p>
          <p className="mb-14 max-w-3xl text-lg text-gray-300">
            Ниже приведены ключевые законы и правила, регулирующие проведение этих работ в Республике Казахстан:
          </p>
          <div className="border-t border-gold">
            {laws.map((law, i) => (
              <LawItem key={law.t} law={law} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14">
          <h2 className="text-3xl font-bold md:text-4xl">Историко-культурная экспертиза / Археологическая экспертиза</h2>
          <p className="mt-2 text-lg text-charcoal-foreground/70">Методика и этапы проведения</p>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-gold rounded-sm border border-gold">
          {stages.map(({ icon: I, t, d }, i) => (
            <div key={t} className="flex gap-6 bg-background p-8">
              <div className="flex w-10 shrink-0 flex-col items-center">
                <span className="font-mono text-sm text-gold">0{i + 1}</span>
                <I className="mt-2 h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contacts" className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-foreground md:text-4xl">Контакты</h2>
              <div className="mt-8 flex flex-col gap-6">
                {contactLinks.map(({ I, label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-lg text-charcoal-foreground/85 transition hover:text-gold"
                  >
                    <I className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-charcoal-foreground md:text-4xl">Оставить заявку</h2>
              <div className="mt-8 rounded-sm border border-gold bg-charcoal/50 p-8">
                <FeedbackForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gold bg-charcoal text-charcoal-foreground/75">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 text-charcoal-foreground"><Logo className="h-8 w-8" /><span className="font-bold">ИКЭ</span></div>
            <p className="mt-4 text-sm">Историко-Культурная Экспертиза</p>
          </div>
          <div className="space-y-3 text-sm">
            {contactLinks.map(({ I, label, href }) => (
              <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-gold">
                <I className="h-4 w-4 text-gold" /> {label}
              </a>
            ))}
          </div>
          <div className="text-sm md:text-right">
            <div className="flex gap-3 md:justify-end">
              {contactLinks.map(({ I, href, name }) => (
                <a key={href} href={href} aria-label={name} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="rounded-sm border border-gold p-2 transition hover:border-gold hover:text-gold"><I className="h-4 w-4 text-gold" /></a>
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

