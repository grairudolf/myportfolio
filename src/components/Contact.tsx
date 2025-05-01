import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Mail, Download, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_jsz791z",
          "template_fy7433q",
          formRef.current,
          "NfmCK0H05YlOcyOcD" 
        )
        .then(
          () => {
            toast({
              title: "Message sent!",
              description:
                "Thank you for your message. I'll get back to you soon!",
            });
            formRef.current.reset();
          },
          (error) => {
            toast({
              title: "Error",
              description:
                "Failed to send the message. Please try again later.",
              variant: "destructive",
            });
            console.error("EmailJS Error:", error);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient inline-block">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-gray-300 text-lg">
              Have a question or want to work together? Feel free to reach out
              through the form or connect with me on social media.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <SocialLink
                    icon={<Github />}
                    href="https://github.com/grairudolf"
                    label="GitHub"
                  />
                  <SocialLink
                    icon={<Linkedin />}
                    href="https://linkedin.com/in/grairudolf"
                    label="LinkedIn"
                  />
                  <SocialLink
                    icon={<Twitter />}
                    href="https://twitter.com/grai_rudolf"
                    label="Twitter"
                  />
                  <SocialLink
                    icon={<Mail />}
                    href="mailto:rtech777r@gmail.com"
                    label="Email"
                  />
                </div>
              </div>

          <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  My Resume
                </h3>
                <Button
                  className="bg-gradient-portfolio hover:bg-gradient-portfolio-hover"
                  asChild>
                  <a href="https://docs.google.com/document/d/1zIMbLKmz29i13PSKohLrRoUgpSdBxn_OufzlkheAw4I/edit?usp=sharing">
                    <Eye className="h-4 w-4 mr-2" /> {/* Use the Eye icon */}
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className="bg-portfolio-mid-blue/10 border-portfolio-mid-blue/30 focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="bg-portfolio-mid-blue/10 border-portfolio-mid-blue/30 focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-300">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  defaultValue="From portfolio"
                  required
                  className="bg-portfolio-mid-blue/10 border-portfolio-mid-blue/30 focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  className="bg-portfolio-mid-blue/10 border-portfolio-mid-blue/30 focus:border-purple-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-gradient-portfolio hover:bg-gradient-portfolio-hover w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{
  icon: React.ReactNode;
  href: string;
  label: string;
}> = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-portfolio-mid-blue/30 hover:bg-portfolio-mid-blue/50 flex items-center justify-center transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Contact;
