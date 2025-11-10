import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingDialog } from "@/components/BookingDialog";
import { Calendar, MessageSquare, Repeat, Home, CheckCircle2 } from "lucide-react";
import ghostframeLogo from "@/assets/ghostframe-logo.png";
const Index = () => {
  const [showBooking, setShowBooking] = useState(false);
  useEffect(() => {
    const container = document.getElementById('chat-widget-container');
    if (container) {
      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', '6903cdb8d6df2a2f15d97915');
      container.appendChild(script);
      return () => {
        if (container.contains(script)) {
          container.removeChild(script);
        }
      };
    }
  }, []);
  return <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center">
            <img src={ghostframeLogo} alt="GhostFrame Marketing" className="h-20" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-sm text-muted-foreground mb-6">We build systems that never sleep</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
          Never Miss Another Buyer, Seller, Or Showing Ever Again.
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto">
          GhostNet AI answers your calls, follows up with leads, and books appointments 24/7 so you can focus on
          closings, not callbacks.
        </p>
        
        <div className="max-w-4xl mx-auto mb-12">
          <video className="w-full rounded-lg shadow-lg" controls autoPlay muted loop playsInline>
            <source src="https://storage.googleapis.com/msgsndr/K5b9gVmLrEQZQwjc30Hl/media/690b8000095b9c1561d18261.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" onClick={() => setShowBooking(true)}>
          Activate GhostNet AI
        </Button>
      </section>

      {/* Value Proposition */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            What If You Could Double Your Closings Without Doubling Your Workload?
          </h3>
          <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground">
            Real estate isn't about working harder it's about never missing opportunities. GhostNet AI turns missed
            calls, DMs, and follow-ups into booked showings automatically. While you're closing one deal, your AI
            assistant is quietly lining up the next.
          </p>
          <p className="text-xl font-semibold text-center mb-8">
            Designed for agents who want more leads, more appointments, and more freedom.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">24/7 Lead Response</h4>
                  <p className="text-muted-foreground">Answers new leads instantly 
no more missed inquiries.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Smart Scheduling</h4>
                  <p className="text-muted-foreground">Books appointments directly into your calendar.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <Repeat className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Automatic Follow-ups</h4>
                  <p className="text-muted-foreground">Follows up with every lead until they reply.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <Home className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Pipeline Management</h4>
                  <p className="text-muted-foreground">Keeps your pipeline full, even on your days off.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">Who This Is For</h3>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {["Agents tired of missing calls from potential buyers or sellers", "Realtors juggling too many follow-ups manually", "Small brokerages looking to compete with bigger teams", "Agents who want more appointments without cold calling", "Teams that need an AI assistant to book and confirm showings automatically", "Professionals ready to look more organized and responsive", "Realtors who lose leads after hours", "Solo agents without a full-time assistant", "Real estate businesses that want to scale without hiring more staff"].map((item, index) => <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">{item}</p>
            </div>)}
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-center">Choose Your Package</h3>
        <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
          Every package is designed to automate your business from answering calls to converting leads and managing
          your reputation.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Package 1 */}
          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">The Answer Package</h4>
            <p className="text-muted-foreground mb-6">Perfect for small teams or solo operators who want to stop missing leads.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>24/7 AI Voice Agent</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>AI Chat Widget for your website</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Call & Chat Reporting Dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Reputation Management (Lite)</span>
              </li>
            </ul>
          </Card>

          {/* Package 2 - Most Popular */}
          <Card className="p-8 border-primary border-2 bg-card relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            <h4 className="text-2xl font-bold mb-4">The Dominate Package</h4>
            <p className="text-muted-foreground mb-6">Perfect for businesses ready to automate, scale, and grow on autopilot.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Advanced AI Chatbot trained for FAQs and scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>24/7 AI Voice Agent</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Automated Appointment Scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Customer reputation management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Data Reactivation</span>
              </li>
            </ul>
          </Card>

          {/* Package 3 */}
          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">The Retain Package</h4>
            <p className="text-muted-foreground mb-6">Perfect for established businesses focused on client retention and long-term growth.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Everything in "The Dominate Package"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Advanced Data Reactivation System</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Advanced Analytics Dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Priority Support + Strategy Call</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Reputation Management PRO</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => setShowBooking(true)} className="bg-primary hover:bg-primary/90">
            See How This Works For Your Business
          </Button>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">What Makes Us Different</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">Built From the Inside, Not the Outside</h4>
            <p className="text-muted-foreground">Most automation companies build from the surface quick setups that look good but fall apart when it matters. GhostFrame builds from the inside out, focusing on the systems, logic, and flow that keep your business running automatically, 24/7.</p>
          </Card>

          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">Always Upgrading, Never Outdated</h4>
            <p className="text-muted-foreground">
              Your business evolves and your systems should too. GhostNet AI adapts as technology changes, so every
              upgrade, every new feature, and every improvement can be seamlessly added without rebuilding from scratch.
            </p>
          </Card>

          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">Real-Time Monitoring & Support</h4>
            <p className="text-muted-foreground">We personally monitor client systems around the clock, receiving instant alerts for leads, calls, and performance activity. Your system doesn't just run it learns, improves, and performs better every single week.</p>
          </Card>

          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">Tailored AI That Sounds Like You</h4>
            <p className="text-muted-foreground">Most AI setups sound robotic and generic. GhostFrame's agents are trained to match your tone, your brand, and your customer style. It's not just automation it's authentic communication that helps you close more business.</p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 border-border bg-card text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">1</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Connect</h4>
            <p className="text-muted-foreground">
              We start by learning how you work—your lead sources, your process, and your goals. Then we customize your
              AI assistant to sound just like you and plug it directly into your business.
            </p>
          </Card>

          <Card className="p-8 border-border bg-card text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">2</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Automate</h4>
            <p className="text-muted-foreground">Once everything's connected, your AI begins doing the heavy lifting booking appointments, following up with leads, and answering common questions automatically.</p>
          </Card>

          <Card className="p-8 border-border bg-card text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">3</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Scale</h4>
            <p className="text-muted-foreground">Now that your systems are running in the background, you can focus on what matters closing deals. Your AI continues to nurture leads, request reviews, and re-engage cold contacts.</p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => setShowBooking(true)} className="bg-primary hover:bg-primary/90">
            Book Your Free Strategy Call
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8">
          Experience the Power of GhostNet AI for Yourself
        </h3>
        <p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">Don't just take our word for it see how GhostNet AI books leads, answers questions, and follows up like clockwork.</p>
        <div id="chat-widget-container" className="mb-8 flex justify-center"></div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 GhostFrame Marketing. All rights reserved.</p>
        </div>
      </footer>

      {/* Booking Dialog */}
      <BookingDialog open={showBooking} onOpenChange={setShowBooking} />
    </div>;
};
export default Index;