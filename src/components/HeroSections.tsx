import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/7c172628-ad27-4056-ae59-d74bdc35a937/files/006433a3-d805-4a7c-9e42-7d950df6413a.jpg";

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

const team = ["Gavin", "Nigel", "Aidan", "Mikail"];

interface HeroSectionsProps {
  scrollTo: (id: string) => void;
}

const HeroSections = ({ scrollTo }: HeroSectionsProps) => {
  return (
    <>
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
              Serving Leaside, Toronto
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
    </>
  );
};

export default HeroSections;
