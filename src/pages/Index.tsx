import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookingDialog } from "@/components/BookingDialog";
import {
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  CalendarCheck,
  Bot,
  Phone,
  MessageSquare,
  BarChart3,
  Star,
  Megaphone,
  Filter,
  LineChart,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Quote,
  Rocket,
  Headphones,
  Cog,
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "AI-Powered Marketing", desc: "Modern strategies powered by AI tools, automation, and smart customer acquisition systems." },
  { icon: Target, title: "Lead Generation", desc: "Campaigns designed to attract more qualified leads and turn attention into opportunities." },
  { icon: Megaphone, title: "Facebook & Instagram Ads", desc: "Targeted ad campaigns built to drive traffic, capture leads, and increase conversions." },
  { icon: Filter, title: "Funnels & Booking Systems", desc: "Smart funnels and booking flows that move prospects from interest to appointment." },
  { icon: Zap, title: "Automated Follow-Up", desc: "Text, email, and workflow automations that help you follow up faster and stop losing leads." },
  { icon: MessageSquare, title: "AI Chatbots", desc: "Website and messaging chatbots that capture leads and guide customers toward booking." },
  { icon: Phone, title: "AI Voice Agents", desc: "AI voice agents that answer calls, qualify leads, and help book appointments 24/7." },
  { icon: Star, title: "Reputation Management", desc: "Collect reviews, improve online reputation, and build trust with future customers." },
  { icon: LineChart, title: "Data Analytics & Reporting", desc: "Clear reporting that tracks performance, measures growth, and reveals new opportunities." },
  { icon: BarChart3, title: "Content & Growth Strategies", desc: "Content systems that increase visibility, educate your audience, and support long-term growth." },
];

const whyBullets = [
  "AI-powered automation systems",
  "Faster lead response times",
  "Automated customer follow-up",
  "AI chatbots & voice agents",
  "Increased booking opportunities",
  "Reputation management systems",
  "Performance tracking & analytics",
  "Modern growth strategies",
  "Systems designed to save time and increase efficiency",
];

const faqs = [
  { q: "What types of businesses do you work with?", a: "We work with local businesses looking to improve lead generation, automate follow-up, and grow using modern marketing systems." },
  { q: "How do AI automation systems help my business?", a: "AI automation helps businesses respond faster, follow up consistently, save time, and convert more leads into customers." },
  { q: "Do you run Facebook and Instagram ads?", a: "Yes. We create and manage strategic advertising campaigns designed to generate leads and grow your business." },
  { q: "What are AI chatbots and voice agents?", a: "AI chatbots and voice agents help businesses communicate with leads automatically by answering questions, qualifying prospects, and helping book appointments." },
  { q: "How does reputation management work?", a: "We help businesses generate more positive reviews, improve online credibility, and strengthen customer trust through automated review systems." },
  { q: "Can these systems work for small businesses?", a: "Absolutely. Our systems are designed to help businesses streamline operations, improve customer communication, and increase growth opportunities." },
];

const Index = () => {
  const [showBooking, setShowBooking] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-md border border-primary/60 grid place-items-center bg-primary/10 group-hover:bg-primary/20 transition">
              <div className="w-3 h-3 rounded-sm bg-primary glow-primary" />
            </div>
            <span className="font-semibold tracking-tight">
              Ghostframe<span className="text-primary"> Marketing</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <button onClick={() => scrollTo("about")} className="hover:text-foreground transition">About</button>
            <button onClick={() => scrollTo("system")} className="hover:text-foreground transition">System</button>
            <button onClick={() => scrollTo("services")} className="hover:text-foreground transition">Services</button>
            <button onClick={() => scrollTo("results")} className="hover:text-foreground transition">Results</button>
            <button onClick={() => scrollTo("faq")} className="hover:text-foreground transition">FAQ</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-foreground transition">Contact</button>
          </nav>
          <Button onClick={() => setShowBooking(true)} className="hidden md:inline-flex">
            Book Call <ArrowRight className="ml-1" />
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative container mx-auto px-6 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur text-xs text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            AI Marketing & Automation Systems
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            Invisible Systems.
            <br />
            <span className="text-gradient">Visible Growth.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            AI-powered marketing and automation systems helping businesses capture leads, automate follow-up, and book more customers, without the manual work.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="lg" className="text-base px-7 h-12 glow-primary" onClick={() => setShowBooking(true)}>
              Book a Free Strategy Call <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-7 h-12 border-border bg-card/40 backdrop-blur" onClick={() => scrollTo("problem")}>
              Learn More
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border rounded-xl overflow-hidden max-w-4xl mx-auto">
            {[
              { k: "24/7", v: "Lead response" },
              { k: "3x", v: "Faster follow-up" },
              { k: "10+", v: "Automation services" },
              { k: "100%", v: "Done-for-you" },
            ].map((s) => (
              <div key={s.k} className="bg-card/60 backdrop-blur p-6">
                <div className="text-3xl font-bold text-primary">{s.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="relative py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">The Problem</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Most businesses don't have a lead problem.
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                They have a <span className="text-foreground font-semibold">systems</span> problem.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Leads go cold.",
                "Follow-up gets delayed.",
                "Potential customers lose interest.",
                "Opportunities slip through the cracks every single day.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <p className="text-lg">{line}</p>
                </div>
              ))}
              <p className="text-muted-foreground pt-2">
                Ghostframe builds AI-powered systems designed to capture, nurture, and convert leads automatically, so your business keeps growing behind the scenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="system" className="relative py-28 border-y border-border/60 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">How It Works</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Ghostframe System</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { n: "01", t: "Capture", h: "Capture More Leads", icon: Target, d: "We attract and capture qualified leads using strategic campaigns, paid ads, funnels, and automated lead systems." },
              { n: "02", t: "Automate", h: "Automate Follow-Up", icon: Zap, d: "Our AI-powered systems instantly respond to leads, follow up automatically, and keep your business connected 24/7." },
              { n: "03", t: "Convert", h: "Book More Customers", icon: CalendarCheck, d: "Turn more leads into appointments, customers, and revenue with systems built to increase conversions." },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.n} className="relative p-8 bg-card border-border hover:border-primary/60 transition group overflow-hidden">
                  <div className="absolute -right-6 -top-6 text-[7rem] font-bold text-primary/5 group-hover:text-primary/10 transition leading-none">
                    {step.n}
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{step.t}</div>
                    <h3 className="text-2xl font-bold mb-3">{step.h}</h3>
                    <p className="text-muted-foreground">{step.d}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Services</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">What We Do</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A complete stack of AI marketing, automation, and growth systems built to keep your business moving while you focus on the work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Card
                  key={i}
                  className="group p-6 bg-card border-border hover:border-primary/60 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/30 grid place-items-center mb-5 group-hover:bg-primary/20 transition">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Positioning */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-primary/10 blur-[120px]" />
        <div className="relative container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Behind every growing business is a <span className="text-gradient">system</span>.
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            <p>
              Ghostframe Marketing operates behind the scenes, building invisible systems that help businesses grow smarter, respond faster, and scale more efficiently.
            </p>
            <p>
              From AI automations to lead nurturing systems, we help modern businesses stay ahead in a rapidly changing digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="relative py-28 border-t border-border/60 bg-card/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Why Ghostframe</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Why Businesses Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {whyBullets.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">{b}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Clock, t: "Save Time", d: "Automate the busywork that drains your day." },
              { icon: ShieldCheck, t: "Stay Consistent", d: "Every lead, every follow-up, on schedule." },
              { icon: Bot, t: "Always On", d: "AI agents that work 24/7 in the background." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-6 rounded-xl border border-border bg-background/40">
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <div className="font-semibold mb-1">{f.t}</div>
                  <p className="text-sm text-muted-foreground">{f.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28">
        <div className="container mx-auto px-6">
          <div className="relative max-w-5xl mx-auto rounded-3xl border border-primary/40 bg-gradient-to-br from-card via-card to-primary/10 p-12 md:p-20 text-center overflow-hidden ring-glow">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Ready to grow smarter?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Let Ghostframe build the invisible systems that help your business generate more leads, automate follow-up, and book more customers.
              </p>
              <Button size="lg" className="h-12 px-8 text-base glow-primary" onClick={() => setShowBooking(true)}>
                Book Your Free Strategy Call <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-28 border-t border-border/60">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-28 border-t border-border/60 bg-card/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Contact</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Let's build your growth system.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tell us about your business and let's explore how Ghostframe can help automate and scale your growth.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowBooking(true);
            }}
            className="grid md:grid-cols-2 gap-4 p-8 rounded-2xl border border-border bg-card"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business">Business Name</Label>
              <Input id="business" placeholder="Your business" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="(555) 555-5555" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="help">What help do you need?</Label>
              <Textarea id="help" rows={4} placeholder="Tell us what you're working on..." />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" size="lg" className="w-full h-12 glow-primary">
                Get Started <ArrowRight />
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md border border-primary/60 grid place-items-center bg-primary/10">
                <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
              </div>
              <div>
                <div className="font-semibold">Ghostframe Marketing</div>
                <div className="text-xs text-muted-foreground">Invisible Systems. Visible Growth.</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right max-w-md">
              AI Marketing. Automation. Growth Systems Built For Modern Businesses.
            </p>
          </div>
          <div className="text-center text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} Ghostframe Marketing. All rights reserved.
          </div>
        </div>
      </footer>

      <BookingDialog open={showBooking} onOpenChange={setShowBooking} />
    </div>
  );
};

export default Index;
