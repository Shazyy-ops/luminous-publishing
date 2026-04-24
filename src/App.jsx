import { useState, useEffect } from "react";
import humbag1 from "./assets/humbag1.png";
import ebook1 from "./assets/ebook1.png";
import ebook2 from "./assets/ebook2.png";
import ebook3 from "./assets/ebook3.png";
import ebook4 from "./assets/ebook4.png";
import ebook5 from "./assets/ebook5.png";
import ebook6 from "./assets/ebook6.png";
import grammarly1 from "./assets/grammarly1.png";
import grammarly2 from "./assets/grammarly2.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Book Cover Design",
      description:
        "Professional, eye-catching, and marketable book covers designed to match your genre, strengthen your branding, and help your book stand out.",
      points: [
        "Custom covers for multiple genres",
        "Strong visual branding",
        "Premium, high-quality design",
      ],
    },
    {
      title: "E-book Publishing",
      description:
        "Reliable publishing support that makes the process simple and stress-free, with professional formatting guidance and a polished final presentation.",
      points: [
        "Publishing support and guidance",
        "Formatting and presentation help",
        "Smooth, client-friendly process",
      ],
    },
  ];

  const trustPoints = [
    "Professional service",
    "Clear communication",
    "Client-focused process",
    "Quality work",
    "Reliable support",
    "Attention to detail",
  ];

  const portfolioItems = [
    { title: "Fiction Cover Design", category: "Book Cover" },
    { title: "Romance Cover Concept", category: "Book Cover" },
    { title: "E-book Presentation", category: "Publishing" },
    { title: "Author Branding Cover", category: "Book Cover" },
  ];

  const bookCoverImages = [
    "https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.15752-9/672156361_742553805519465_3732033068598845043_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=C_LKsz-wUVgQ7kNvwHCPpcq&_nc_oc=Adou9bz3C8e1UsDVSXO_CouRRDX9L70EIV1fYa3zt2ziY4DDxtX32LwUMKhr8aMypOQ&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_ss=7a2a8&oh=03_Q7cD5AHaS4EQmg_wstRJW8e6utV2Y8I99BpCqBmNLMxVCgBAGw&oe=6A0FA2B7",
    "https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.15752-9/673445087_1436828384427613_6534872302127722032_n.png?stp=dst-png_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=K1t3SH2oTfkQ7kNvwG2GzN9&_nc_oc=AdrvAZ-XiMOPBX0VZtlkXJjU2DadF1BdiPgCaYQ79IInC-BBBjrm9Y0AsWTy6pQ89wI&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_ss=7a2a8&oh=03_Q7cD5AHrgBg-VDYL3N0nTfW_m9Mk-aFMmehn2K5scuBQQtTu4g&oe=6A0FA27B",
    "https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.15752-9/672834876_1285414596453622_4956757252135529165_n.png?stp=dst-png_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=JbDTbalBBd8Q7kNvwGm1SwX&_nc_oc=AdqGFA99GMoPkXC0WUMVi_HejTjsu6LQS11GJ4RDZIbP7NWkmTybeNNvriB3ZUaTPDk&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_ss=7a2a8&oh=03_Q7cD5AH6HgjpsVV_eCNLgveTlNMnBX4sPTOzCfQxvzxq9d2xzg&oe=6A0F9383",
    "https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.15752-9/666229568_1537429874622061_8767047467185037740_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Njkv5cZ93eQQ7kNvwGhShQk&_nc_oc=Ado92ryOujvrh0hPgrsPRe9EWj0QNrAZlboNGCGLexsg_yx4wuiaOYsRS9g7TF6rlA4&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_ss=7a2a8&oh=03_Q7cD5AG9c_HC6C7y1vglKrOWmf5ckYdCGIa_2ipKpj64osiz_g&oe=6A0F9D89",
    "https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.15752-9/676011460_933756365958550_8561767082549461946_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Vfz0QLhhxwAQ7kNvwEIO-6j&_nc_oc=Ado3qbvEA6oNbJ9cmARLAJVzVXK7fMscg0HDYLzC8pfbKqOlwU685PtFY2juLAL1V6g&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_ss=7a2a8&oh=03_Q7cD5AFbUbZlEO5JIpHXSJdcPQ7gtN4mVmWP0zDNKfEyAgkm9g&oe=6A0F6FD4",
    "https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.15752-9/672195148_2198718337650702_6332616313637317648_n.png?stp=dst-png_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=w34CKkG-lVwQ7kNvwGrq_PI&_nc_oc=AdpjA2R-9CUu2KBgQnq_HlPHjU6ayKf3CaklsuHS-VR3DzsQ_vKEAGCSykYmW8PcbNE&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_ss=7a2a8&oh=03_Q7cD5AHGL-ptEAXP2jXwa9C6Osu9lXdNhoI_4tvDYFEAHft8Kw&oe=6A0F9233",
    "https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.15752-9/671889885_976445394885961_2926714285807200790_n.png?stp=dst-png_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=DZeVz1yvh3UQ7kNvwGL6dNS&_nc_oc=Adr_MlwC9W400gMcwTDEvaH14QLt-PrPa_m0bu3qKNrofb2s-DwBrAVnbjhzzguiKA4&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_ss=7a2a8&oh=03_Q7cD5AEMK2kUB777vgLsam46EsG3IEc8PDN5tet0PrySROkRLA&oe=6A0F7EF4",
    "https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.15752-9/672166160_934211022824237_7221402581352463339_n.png?stp=dst-png_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=R_sDcC1prnwQ7kNvwG8AwUT&_nc_oc=Adqub7c3ROynR2phZFsI9q8JIU1-HJa755EdgK7MoR7rKij_N1s8mTWctfIq64y_Pt8&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_ss=7a2a8&oh=03_Q7cD5AFOrMPetmcvwyCkssRE7ALiWYDNulEciJE5981KcZQ2Iw&oe=6A0FA223",
  ];

  const ebookServiceClauses = [
    "E-book formatting for Kindle & PDF — clean, reader-friendly layouts that feel polished and professional.",
    "KDP upload support — guidance for preparing files correctly for Amazon publishing.",
    "Typography and spacing optimization — improved readability with balanced text flow.",
    "Interactive PDF setup — clickable links and structured pages for a modern digital experience.",
    "File conversion support — manuscript conversion into EPUB and PDF-ready formats.",
    "Final quality check — careful review to reduce formatting issues before delivery.",
  ];

  const ebookCards = [
    { title: "E-book Interior Layout", img: ebook1 },
    { title: "Kindle Publishing Setup", img: ebook2 },
    { title: "Author PDF Presentation", img: ebook3 },
    { title: "Digital Book Formatting", img: ebook4 },
    { title: "Launch-Ready E-book Design", img: ebook5 },
    { title: "Professional E-book Mockup", img: ebook6 },
  ];

  if (currentPage === "book-covers") {
    return (
      <div className="min-h-screen bg-[#f8f7f4] text-slate-800">
        <header className="sticky top-0 z-50 border-b border-white/60 bg-[#f8f7f4]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <button
              onClick={() => setCurrentPage("home")}
              className="text-xl font-semibold text-slate-900"
              type="button"
            >
              Luminous Publishing
            </button>
            <button
              onClick={() => setCurrentPage("home")}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm text-white"
              type="button"
            >
              Back
            </button>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-900">
            Book Cover Portfolio
          </h1>
          <p className="mt-4 text-slate-600">
            Here are some of my latest book cover designs.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {bookCoverImages.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1"
              >
                <div className="h-[500px] w-full overflow-hidden">
                  <img
                    src={img}
                    alt={`Book cover ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (currentPage === "ebook-publishing") {
    return (
      <div className="min-h-screen bg-[#f8f7f4] text-slate-800">
        <header className="sticky top-0 z-50 border-b border-white/60 bg-[#f8f7f4]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <button
              onClick={() => setCurrentPage("home")}
              className="text-xl font-semibold tracking-tight text-slate-900"
              type="button"
            >
              Luminous Publishing
            </button>
            <button
              onClick={() => setCurrentPage("home")}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              type="button"
            >
              Back to Home
            </button>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Service Page
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              E-book Publishing
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Professional support for clients who want their e-book to look
              clean, polished, and properly prepared.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                What clients get
              </h2>
              <div className="mt-6 space-y-4">
                {ebookServiceClauses.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Writing Score + Grammarly Images */}
            <div className="rounded-[2rem] bg-gradient-to-br from-[#fff1eb] to-[#efe8ff] p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-white p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Writing Score
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  Content & Writing Quality Preview
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  You can showcase writing samples, readability scores, or
                  content previews here.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                    <img
                      src={grammarly1}
                      alt="Grammarly Score"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                    <img
                      src={grammarly2}
                      alt="Writing Stats"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Cards — NO "Add Image Here" boxes */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ebookCards.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
              >
                <div className="h-[300px] w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    E-book Publishing
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Professional publishing and formatting work crafted to make
                    your e-book look polished and market-ready.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-slate-900 px-8 py-10 text-white shadow-lg">
            <h2 className="text-2xl font-semibold">
              Need help publishing your e-book professionally?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Get support that makes the process easier, clearer, and more
              polished for your final digital book presentation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:your@email.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900"
              >
                Contact Me
              </a>
              <button
                onClick={() => setCurrentPage("home")}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white"
                type="button"
              >
                Back to Home
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-800 scroll-smooth">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-[#f8f7f4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#home"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Luminous Publishing
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-900">
              Services
            </a>
            <a href="#about" className="transition hover:text-slate-900">
              About
            </a>
            <a href="#portfolio" className="transition hover:text-slate-900">
              Portfolio
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(196,181,253,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(251,191,183,0.22),_transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
            <div>
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
                Custom eBook & Full Wrap Covers
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Custom eBook Covers That Actually Sell
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-7 text-slate-700 sm:text-xl">
                Stand out instantly with unique, high-quality designs tailored
                to your story.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5"
                >
                  View Services
                </a>
                <a
                  href="#portfolio"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  See Work Preview
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <button
                    onClick={() => setCurrentPage("book-covers")}
                    className="relative rounded-3xl bg-[#efe8ff] p-5 text-left transition hover:-translate-y-1 hover:shadow-md"
                    type="button"
                  >
                    {activeCard === 0 && (
                      <span className="absolute -top-2 -right-2 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                        <span className="relative inline-flex h-5 w-5 rounded-full bg-purple-500" />
                      </span>
                    )}
                    <p className="text-sm font-medium text-slate-500">
                      Main Focus
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      Book Cover Design
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Covers that feel premium, genre-aware, and professionally
                      crafted.
                    </p>
                    <p
                      className={`mt-4 text-sm font-semibold flex items-center gap-1 transition-all duration-300 ${activeCard === 0 ? "text-purple-600" : "text-slate-900"}`}
                    >
                      View Book Cover Page{" "}
                      <span
                        className={`transition-all duration-300 ${activeCard === 0 ? "translate-x-1" : ""}`}
                      >
                        →
                      </span>
                    </p>
                  </button>

                  <button
                    onClick={() => setCurrentPage("ebook-publishing")}
                    className="relative rounded-3xl bg-[#fff1eb] p-5 text-left transition hover:-translate-y-1 hover:shadow-md"
                    type="button"
                  >
                    {activeCard === 1 && (
                      <span className="absolute -top-2 -right-2 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                        <span className="relative inline-flex h-5 w-5 rounded-full bg-orange-500" />
                      </span>
                    )}
                    <p className="text-sm font-medium text-slate-500">
                      Added Support
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      E-book Publishing
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Guidance that makes the publishing process easier and more
                      reliable.
                    </p>
                    <p
                      className={`mt-4 text-sm font-semibold flex items-center gap-1 transition-all duration-300 ${activeCard === 1 ? "text-orange-600" : "text-slate-900"}`}
                    >
                      View E-book Page{" "}
                      <span
                        className={`transition-all duration-300 ${activeCard === 1 ? "translate-x-1" : ""}`}
                      >
                        →
                      </span>
                    </p>
                  </button>
                </div>
                <div className="mt-4 rounded-3xl bg-slate-900 p-6 text-white">
                  <p className="text-sm text-slate-300">
                    Why clients choose this service
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-2xl font-semibold">Clean</p>
                      <p className="text-sm text-slate-300">Presentation</p>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">Clear</p>
                      <p className="text-sm text-slate-300">Communication</p>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">Trusted</p>
                      <p className="text-sm text-slate-300">Process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Simple, professional services designed to help your work stand
              out.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each service is built to give clients a smooth experience,
              polished results, and confidence in the final presentation.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                      <p className="text-sm leading-6 text-slate-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Why Choose Me
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  A client experience built on quality, trust, and clear
                  communication.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  My goal is not just to deliver creative work, but to make the
                  entire process feel smooth, professional, and dependable from
                  start to finish.
                </p>
                <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-md">
                  <p className="px-5 pt-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Featured Work
                  </p>
                  <img
                    src={humbag1}
                    alt="Humbag 1 Book Cover"
                    className="mt-3 w-full object-top object-cover"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-3xl border border-slate-200 bg-[#fafafa] p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {point}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Every project is handled with care so clients feel
                      supported, informed, and confident throughout the process.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#efe8ff] to-[#fff1eb] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
              <div className="rounded-[1.5rem] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  About
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  Creative work with a professional, client-first approach.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  This brand is built to help authors and digital creators
                  present their ideas with confidence. From custom book cover
                  design to e-book publishing support, every service is focused
                  on delivering polished results that feel professional,
                  thoughtful, and trustworthy.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  The approach is simple: listen carefully, communicate clearly,
                  and create work that not only looks beautiful, but also
                  supports the client's goals.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Warm & Professional",
                  desc: "A brand presence that feels welcoming while maintaining a premium, reliable image.",
                },
                {
                  title: "Clear Process",
                  desc: "Clients know what to expect, making every project feel organized and stress-free.",
                },
                {
                  title: "Polished Results",
                  desc: "Attention to detail helps create a final result that looks refined and high quality.",
                },
                {
                  title: "Client Confidence",
                  desc: "The website and service structure are designed to make hiring feel simple and reassuring.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f8f7f4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-medium text-slate-900">Luminous Publishing</p>
            <p className="mt-1">
              Professional creative services for authors and digital creators.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://www.instagram.com/luminous._covers/"
              className="transition hover:text-slate-900"
            >
              Instagram
            </a>
            <a
              href="mailto:luminousarts786@gmail.com"
              className="transition hover:text-slate-900"
            >
              Email
            </a>
            <a
              href="https://x.com/Framesandflow"
              className="transition hover:text-slate-900"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
