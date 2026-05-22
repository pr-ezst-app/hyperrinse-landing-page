import { useState } from "react";
import Icon from "@/components/ui/icon";

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

const ContactFooter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", contact: "", service: "", hose: "", message: "" });

  const handleSend = () => {
    const subject = encodeURIComponent(`Car Wash Request from ${form.name || "a customer"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nContact: ${form.contact}\nService: ${form.service}\nHas a hose: ${form.hose}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hyper.rinse2025@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
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
    </>
  );
};

export default ContactFooter;
