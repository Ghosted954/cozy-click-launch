import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingDialog } from "@/components/BookingDialog";
import { Calendar, MessageSquare, Repeat, Scissors, CheckCircle2 } from "lucide-react";
import ghostframeLogo from "@/assets/ghostframe-logo.png";
const Index = () => {
  const [showBooking, setShowBooking] = useState(false);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  useEffect(() => {
    // Load chat widget script
    const container = document.getElementById('chat-widget-container');
    if (container) {
      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', '6903cdb8d6df2a2f15d97915');
      container.appendChild(script);
    }

    // Load booking calendar embed script
    const bookingScript = document.createElement('script');
    bookingScript.src = 'https://api.myfreshprintz.com/js/form_embed.js';
    bookingScript.type = 'text/javascript';
    document.body.appendChild(bookingScript);

    return () => {
      if (container && container.contains(document.querySelector('script[src="https://widgets.leadconnectorhq.com/loader.js"]'))) {
        const chatScript = container.querySelector('script');
        if (chatScript) container.removeChild(chatScript);
      }
      if (document.body.contains(bookingScript)) {
        document.body.removeChild(bookingScript);
      }
    };
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
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Turn Missed Calls Into Booked Grooming Appointments Automatically.</h2>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto">PAW Connect AI answers every call, follows up by text, books appointments, and fills your calendar 24/7.


      </p>
        
        <div className="max-w-4xl mx-auto mb-12">
          <video className="w-full rounded-lg shadow-lg" controls autoPlay muted loop playsInline>
            <source src="https://storage.googleapis.com/msgsndr/K5b9gVmLrEQZQwjc30Hl/media/690b8000095b9c1561d18261.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" onClick={scrollToBooking}>
          Activate GhostNet AI
        </Button>
      </section>

      {/* Value Proposition */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-center">

        </h3>
          <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground">
            Pet grooming isn't about working harder — it's about never missing a booking. GhostNet AI turns missed
            calls, texts, and follow-ups into confirmed grooming appointments automatically. While you're working on one
            pet, your AI assistant is quietly booking the next.
          </p>
          <p className="text-xl font-semibold text-center mb-8">
            Designed for groomers who want more bookings, more returning clients, and more freedom.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">24/7 Client Response</h4>
                  <p className="text-muted-foreground">Answers new client inquiries instantly — no more missed bookings.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Smart Scheduling</h4>
                  <p className="text-muted-foreground">Books grooming appointments directly into your calendar.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <Repeat className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Automatic Follow-ups</h4>
                  <p className="text-muted-foreground">Sends reminders and re-booking prompts to every client automatically.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <Scissors className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Client Retention</h4>
                  <p className="text-muted-foreground">Keeps your chair full with repeat clients, even on your days off.</p>
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
          {["Groomers tired of missing calls from pet owners trying to book", "Solo stylists juggling too many texts and follow-ups manually", "Small grooming salons looking to compete with bigger chains", "Groomers who want a fully booked schedule without constantly marketing", "Shops that need an AI assistant to confirm and reschedule appointments automatically", "Professionals ready to look more organized and responsive to clients", "Groomers who lose clients after hours when no one answers", "Mobile groomers without a front-desk receptionist", "Pet grooming businesses that want to grow without hiring more staff"].map((item, index) => <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">{item}</p>
            </div>)}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">What Makes Us Different</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">Built for Pet Businesses, Not Generic Ones</h4>
            <p className="text-muted-foreground">Most automation tools are built for generic businesses. GhostFrame builds from the inside out, creating systems specifically trained on pet grooming workflows — from breed-specific services to seasonal demand spikes.</p>
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
            <p className="text-muted-foreground">We personally monitor client systems around the clock, receiving instant alerts for new bookings, missed calls, and performance activity. Your system doesn't just run — it learns, improves, and fills more appointments every single week.</p>
          </Card>

          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">Tailored AI That Sounds Like You</h4>
            <p className="text-muted-foreground">Most AI setups sound robotic and generic. GhostFrame's agents are trained to match your tone, your brand, and your pet-loving clientele. It's not just automation — it's warm, authentic communication that keeps clients coming back.</p>
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
              We start by learning how your grooming business works — your services, your schedule, and your clients. Then we customize your
              AI assistant to sound just like you and plug it directly into your booking flow.
            </p>
          </Card>

          <Card className="p-8 border-border bg-card text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">2</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Automate</h4>
            <p className="text-muted-foreground">Once everything's connected, your AI begins doing the heavy lifting — booking grooming appointments, sending reminders, and answering common pet owner questions automatically.</p>
          </Card>

          <Card className="p-8 border-border bg-card text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">3</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Scale</h4>
            <p className="text-muted-foreground">Now that your systems are running in the background, you can focus on what matters — grooming happy pets. Your AI keeps booking new clients, requesting reviews, and re-engaging lapsed ones.</p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={scrollToBooking} className="bg-primary hover:bg-primary/90">​Activate GhostNet AI</Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8">
          Experience the Power of GhostNet AI for Yourself
        </h3>
        <p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">Don't just take our word for it — see how GhostNet AI books grooming appointments, answers pet owner questions, and follows up like clockwork.</p>
        <div id="chat-widget-container" className="mb-8 flex justify-center"></div>
      </section>

      {/* Book Appointment Section */}
      <section id="booking-section" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Book Your Free Strategy Call
          </h3>
          <p className="text-xl mb-8 text-muted-foreground text-center max-w-3xl mx-auto">
            Ready to transform your pet grooming business? Schedule a personalized consultation to see how GhostNet AI can work for you.
          </p>
          <div className="w-full bg-card rounded-lg shadow-lg p-4 md:p-8">
            <iframe
            src="https://api.myfreshprintz.com/widget/booking/u6nmCc7Cqm1VZ4R5CuTz"
            style={{ width: "100%", height: "800px", border: "none", display: "block" }}
            scrolling="auto"
            id="u6nmCc7Cqm1VZ4R5CuTz_booking_section"
            title="Book Appointment Calendar" />
          
          </div>
        </div>
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