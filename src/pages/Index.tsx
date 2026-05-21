import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/7c172628-ad27-4056-ae59-d74bdc35a937/files/006433a3-d805-4a7c-9e42-7d950df6413a.jpg";

const navLinks = ["Services", "About", "Pricing", "Contact", "FAQ"];

const services = [
  {
    icon: "Car",
    title: "Standard Car Wash",
    desc: "Full exterior hand wash with premium soap and clean microfiber rags. Done right at your driveway.",
  },
  {
    icon: "Snowflake",
    title: "Driveway Shoveling",
    desc: "Fast, reliable snow removal all winter long. We clear your driveway so you can get moving.",
  },
  {
    icon: "Leaf",
    title: "Leaf Raking & Bagging",
    desc: "We rake, blow, and bag your leaves — front yard, back yard, whatever you need.",
  },
];

const faqs = [
  {
    q: "How much does a car wash cost?",
    a: "$15–$25 depending on the size of your car and what you'd like done.",
  },
  {
    q: "How long does it take?",
    a: "15–20 minutes for a normal wash.",
  },
  {
    q: "Do you clean all types of cars?",
    a: "Yes! We can even clean convertibles — we dust the hood and lightly wipe it down.",
  },
  {
    q: "What are your hours?",
    a: "Weekdays: 3 PM – 6 PM. Weekends: 10 AM – 5 PM. Hours may vary if we have family events.",
  },
  {
    q: "Do you work on holidays?",
    a: "Yes, we work all holidays except Christmas. On Thanksgiving and Halloween we work earlier hours.",
  },
  {
    q: "What other services do you offer?",
    a: "Currently: driveway shoveling ($15–$30) and leaf raking & bagging ($20–$80 depending on yard size and whether you want front + back with a leaf blower).",
  },
];

const team = ["Gavin", "Nigel", "Aidan", "Mikail"];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", service: "", hose: "", message: "" });

  const handleSend = () => {
    const subject = encodeURIComponent(`Car Wash Request from ${form.name || "a customer"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nContact: ${form.contact}\nService: ${form.service}\nHas a hose: ${form.hose}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hyper.rinse2025@gmail.com?subject=${subject}&body=${body}`;
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <span
            className="font-display text-xl font-extrabold tracking-tight cursor-pointer select-none"
            onClick={() => scrollTo("home")}
          >
            Hyper<span className="text-brand">Rinse</span>
          </span>

          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors"
          >
            Book a Wash
          </button>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-left text-base font-medium text-foreground"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 bg-brand text-white font-semibold py-3 rounded-full"
            >
              Book a Wash
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="HyperRinse car wash"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24 md:py-36">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 fade-up">
              <Icon name="MapPin" size={13} />
              We come to your driveway
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6 fade-up fade-up-delay-1">
              Your car,<br />
              <span className="text-brand">sparkling</span><br />
              clean.
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 fade-up fade-up-delay-2 max-w-md">
              Professional hand wash right at your home. No appointment needed — just send us a message.
            </p>
            <div className="flex flex-wrap gap-4 fade-up fade-up-delay-3">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-brand/30"
              >
                Book a Wash
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="bg-white/10 backdrop-blur border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-foreground text-white py-8">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "$15–$25", label: "Car Wash" },
            { value: "15–20 min", label: "Average Time" },
            { value: "4 Members", label: "Our Team" },
            { value: "All Types", label: "Cars Accepted" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl md:text-3xl font-bold text-brand">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-pad bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-xl">
            <div className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">What We Do</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">Services built around your needs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-brand hover:shadow-xl hover:shadow-brand/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand transition-colors">
                  <Icon name={s.icon} size={22} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section-pad bg-foreground text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-brand text-sm font-semibold tracking-widest uppercase mb-4">Our Story</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                Started at school,<br />
                <span className="text-brand">built for real.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                HyperRinse started with four friends who decided to stop asking their parents for money and start earning it themselves. Gavin, Nigel, Aidan, and Mikail built this from the ground up — going door to door, bucket and rags in hand.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Now with this website, we're growing. Hand us a business card and we'll come to you when you're ready.
              </p>
            </div>
            <div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-brand text-sm font-semibold tracking-widest uppercase mb-5">Our Goal</div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center shrink-0 mt-1">
                    <Icon name="Target" size={18} className="text-brand" />
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Save up for a car-safe pressure washer. It'll make every wash 2× faster and 2× cleaner — and open the door to even more services.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/50 text-sm mb-4">Meet the team</p>
                  <div className="flex flex-wrap gap-3">
                    {team.map((name) => (
                      <div
                        key={name}
                        className="bg-brand/10 border border-brand/20 text-brand text-sm font-semibold px-4 py-1.5 rounded-full"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="section-pad bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">Pricing</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Simple, fair pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "Car",
                service: "Car Wash",
                price: "$15 – $25",
                note: "Based on car size & extras",
                highlight: true,
              },
              {
                icon: "Snowflake",
                service: "Driveway Shoveling",
                price: "$15 – $30",
                note: "Based on driveway size",
                highlight: false,
              },
              {
                icon: "Leaf",
                service: "Leaf Raking & Bagging",
                price: "$20 – $80",
                note: "Front + back with leaf blower at upper range",
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.service}
                className={`rounded-2xl p-8 border transition-all ${
                  item.highlight
                    ? "bg-brand text-white border-brand shadow-2xl shadow-brand/30 scale-105"
                    : "bg-card border-border hover:border-brand/50"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${item.highlight ? "bg-white/20" : "bg-brand-light"}`}>
                  <Icon name={item.icon} size={20} className={item.highlight ? "text-white" : "text-brand"} />
                </div>
                <div className={`text-sm font-semibold mb-2 ${item.highlight ? "text-white/80" : "text-muted-foreground"}`}>{item.service}</div>
                <div className={`font-display text-3xl font-bold mb-2 ${item.highlight ? "text-white" : "text-foreground"}`}>{item.price}</div>
                <div className={`text-sm ${item.highlight ? "text-white/70" : "text-muted-foreground"}`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-pad bg-secondary/50">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <div className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Common questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-display font-semibold text-base">{faq.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={18}
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section-pad bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Ready for a clean car?</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Shoot us a message and we'll set up a time that works for you.
            </p>
          </div>
          <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-8">
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone or Email</label>
                <input
                  type="text"
                  placeholder="your@email.com or (555) 000-0000"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Service needed</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                >
                  <option value="">Select a service...</option>
                  <option value="Car Wash">Car Wash</option>
                  <option value="Driveway Shoveling">Driveway Shoveling</option>
                  <option value="Leaf Raking & Bagging">Leaf Raking & Bagging</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Do you have a hose?</label>
                <select
                  value={form.hose}
                  onChange={(e) => setForm({ ...form, hose: e.target.value })}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                >
                  <option value="">Select an option...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Anything else?</label>
                <textarea
                  rows={4}
                  placeholder="Car wash, leaf raking, shoveling..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition resize-none"
                />
              </div>
              <button
                onClick={handleSend}
                className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand/25 mt-2"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOURS STRIP ── */}
      <section className="bg-brand-light border-t border-brand/20 py-8">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-3">
            <Icon name="Clock" size={18} className="text-brand" />
            <div>
              <div className="font-semibold text-sm">Weekdays</div>
              <div className="text-muted-foreground text-sm">3 PM – 6 PM</div>
            </div>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div className="flex items-center gap-3">
            <Icon name="Sun" size={18} className="text-brand" />
            <div>
              <div className="font-semibold text-sm">Weekends</div>
              <div className="text-muted-foreground text-sm">10 AM – 5 PM</div>
            </div>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div className="flex items-center gap-3">
            <Icon name="CalendarCheck" size={18} className="text-brand" />
            <div>
              <div className="font-semibold text-sm">Holidays</div>
              <div className="text-muted-foreground text-sm">All except Christmas</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-white py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl font-bold">
            Hyper<span className="text-brand">Rinse</span>
          </span>
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} HyperRinse. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/hyperrinsetoronto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-brand transition-colors text-sm"
            >
              <Icon name="Instagram" size={18} />
              @HyperRinseToronto
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;