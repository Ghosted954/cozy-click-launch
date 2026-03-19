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
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-center">Built Specifically for Pet Groomers Not Generic Businesses</h3>
          <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground">
            Pet grooming isn't about running to the phone. It's about staying focused on the pet in front of you. PAW Connect AI answers missed calls, responds to texts, follows up with pet owners, and books confirmed appointments automatically even while you're mid-groom.
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
                  <p className="text-muted-foreground"><strong>Never Miss Another Inquiry</strong><br />Answers every call and text instantly so no pet owner slips through the cracks.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Smart Scheduling</h4>
                  <p className="text-muted-foreground"><strong>Books Directly Into Your Calendar</strong><br />Confirmed appointments, placed automatically into your existing booking system.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <Repeat className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Automatic Follow-ups</h4>
                  <p className="text-muted-foreground"><strong>Rebooks Clients For You</strong><br />Sends reminders and rebooking prompts so your regulars stay regular.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <Scissors className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Client Retention</h4>
                  <p className="text-muted-foreground"><strong>Keeps Your Schedule Full Year-Round</strong><br />Fills slow days and reduces last-minute gaps.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">This Is For You If You're Tired of Missing Calls.</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-4">
          <div className="space-y-4">
            {["Groomers losing new clients because they can't answer every call", "Shops that miss bookings after hours or on busy days", "Solo groomers juggling texts, voicemails, and DMs manually", "Businesses that can't afford a full-time receptionist", "Groomers tired of playing phone tag with pet owners"].map((item, index) => <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>)}
          </div>
          <div className="space-y-4">
            {["Groomers who want a fully booked schedule without hiring staff", "Mobile groomers working without a front desk", "Small salons competing with big-name chains", "Professionals who want to look faster, smarter, and more organized", "Owners ready to scale without adding payroll"].map((item, index) => <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">Built Specifically for Pet Groomers Not Generic Businesses</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">Designed Specifically for Pet Groomers</h4>
            <p className="text-muted-foreground">Most AI tools are built for generic businesses. PAW Connect AI is trained around real pet grooming workflows from breed-specific services to seasonal demand spikes so it responds the way a grooming shop actually operates.</p>
          </Card>

          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">Set It Up Once. It Keeps Getting Smarter.</h4>
            <p className="text-muted-foreground">
              As your grooming business grows, PAW Connect AI adjusts with you. Updates, improvements, and new features are added without you having to rebuild anything or learn new systems.
            </p>
          </Card>

          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">We Don't Just Set It Up. We Support It.</h4>
            <p className="text-muted-foreground">We monitor your system behind the scenes, tracking missed calls, bookings, and performance. If something needs attention, we handle it so your AI keeps working without interruption.</p>
          </Card>

          <Card className="p-8 border-border bg-card">
            <h4 className="text-2xl font-bold mb-4">AI That Sounds Like Your Shop, Not a Robot</h4>
            <p className="text-muted-foreground">Most AI systems feel cold and scripted. PAW Connect AI is trained to match your tone, your services, and your brand, creating conversations that feel natural to pet owners.</p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">How PAW Connect AI Works</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 border-border bg-card text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">1</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Set Up</h4>
            <p className="text-muted-foreground">We set up PAW Connect AI around your grooming business, your services, pricing, availability, and booking system, so it works exactly like your shop already does.</p>
          </Card>

          <Card className="p-8 border-border bg-card text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">2</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">It Answers</h4>
            <p className="text-muted-foreground">Every call gets answered instantly. PAW Connect AI speaks naturally, gathers details, checks availability, and books appointments so no pet owner ever hits voicemail.</p>
          </Card>

          <Card className="p-8 border-border bg-card text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">3</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">You Stop Losing Money</h4>
            <p className="text-muted-foreground">No more missed calls. No more lost clients. Your calendar stays full while you focus on grooming, not chasing callbacks.</p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={scrollToBooking} className="bg-primary hover:bg-primary/90">Activate GhostNet AI</Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8">
          What Happens When a Pet Owner Calls and You Can't Answer
        </h3>
        <p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">Call the demo line below and hear how PAW Connect AI answers and books just like it would for your grooming shop.</p>
        <div id="chat-widget-container" className="mb-8 flex justify-center"></div>
      </section>

      {/* Book Appointment Section */}
      <section id="booking-section" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            See If PAW Connect AI Is Right for Your Grooming Shop
          </h3>
          <p className="text-xl mb-8 text-muted-foreground text-center max-w-3xl mx-auto">
            In this 30-minute call, we'll show you how PAW Connect AI answers missed calls, books appointments automatically, and fits into your current system. If it's a good fit, we'll walk you through next steps.
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