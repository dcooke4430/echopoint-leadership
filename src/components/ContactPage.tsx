import { useForm, ValidationError } from '@formspree/react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xykdoenj");

  if (state.succeeded) {
    return (
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Inquiry Received</h2>
            <p className="text-slate-600 mt-4">
              Thank you for your message. Our team has received your inquiry and will be in contact with you shortly. We appreciate your interest in EchoPoint Leadership.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-deep-navy">Contact EchoPoint Leadership</h1>
            <p className="text-slate-600 mt-4">
              Direct access for speaking engagements, training inquiries, and strategic advisory. Select the nature of your inquiry to ensure a streamlined response.
            </p>
            <div className="mt-12">
              <h4 className="font-bold uppercase tracking-wider text-deep-navy">Headquarters</h4>
              <p className="text-slate-600 mt-2">EchoPoint Leadership operates globally, advising those who lead where failure is not an option.</p>
              <p className="text-slate-600 mt-4"><strong>Email:</strong> operations@echopointleadership.com</p>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white p-8 md:p-12 border border-slate-200">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input id="full-name" type="text" name="full-name" placeholder="Full Name" required />
              <ValidationError prefix="Full Name" field="full-name" errors={state.errors} className="text-red-500 text-xs" />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input id="organization" type="text" name="organization" placeholder="Organization" />
                <Input id="role" type="text" name="role" placeholder="Role/Title" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input id="email" type="email" name="email" placeholder="Business Email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                <Input id="phone" type="text" name="phone" placeholder="Phone (Optional)" />
              </div>

              <Select name="engagement-category">
                <SelectTrigger>
                  <SelectValue placeholder="Select Engagement Category..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="speaking">Speaking Engagements</SelectItem>
                  <SelectItem value="training">Training & Workshops</SelectItem>
                  <SelectItem value="consulting">Strategic Consulting</SelectItem>
                  <SelectItem value="media">Media & Press Inquiries</SelectItem>
                  <SelectItem value="restricted">Restricted Resource Access</SelectItem>
                </SelectContent>
              </Select>

              <Textarea id="message" name="message" rows={5} placeholder="Nature of your inquiry..." required />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />

              <Button type="submit" size="lg" disabled={state.submitting} className="w-full font-bold uppercase tracking-wider">
                {state.submitting ? 'Submitting...' : 'Start the Conversation'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
