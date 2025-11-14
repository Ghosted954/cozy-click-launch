import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect } from "react";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.myfreshprintz.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:w-[95vw] md:max-w-[1100px] h-[90vh] p-0 overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Schedule Your Consultation</DialogTitle>
        </DialogHeader>
        <div className="flex-1 min-h-0 overflow-auto">
          <p className="text-muted-foreground text-center">
            Select a date and time to book your free strategy call
          </p>
          <iframe
            src="https://api.myfreshprintz.com/widget/booking/u6nmCc7Cqm1VZ4R5CuTz"
            style={{ width: "100%", height: "100%", minHeight: "100%", border: "none", display: "block" }}
            scrolling="auto"
            id="u6nmCc7Cqm1VZ4R5CuTz_1763135334855"
            title="Booking Calendar"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
