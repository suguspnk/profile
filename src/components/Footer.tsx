import emailjs from '@emailjs/browser';
import {
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import React, { useRef, useState } from 'react';

const Footer = () => {
  const formElementRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formElementRef.current || isSending) return;

    setIsSending(true);
    setStatusMessage('Sending...');
    setStatusType('');

    const serviceID = 'service_fre8c8l';
    const templateID = 'template_zhjs0ya';
    const publicKey = 'fMGBVjMf1XWaU1nDy';

    const templateParams = {
      title: 'New Message from Portfolio',
      name: name,
      email: email,
      time: new Date().toLocaleString(),
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          setStatusMessage('Message sent successfully!');
          setStatusType('success');
          setName('');
          setEmail('');
          setMessage('');
          setTimeout(() => {
            setStatusMessage('');
            setStatusType('');
          }, 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setStatusMessage('Failed to send message. Please try again.');
          setStatusType('error');
          setTimeout(() => {
            setStatusMessage('');
            setStatusType('');
          }, 5000);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <footer
      id="contact"
      className="section bg-primary text-primary-foreground py-16 md:py-20 relative overflow-hidden"
      style={{ '--delay': 5 } as React.CSSProperties}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-white">
          Get In <span className="text-accent">Touch</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>
            <div className="space-y-4 md:space-y-5 text-primary-foreground/90">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 text-accent flex-shrink-0" size={18} />
                <a
                  href="mailto:antonio.telimban.jr@gmail.com"
                  className="hover:text-accent transition-colors break-all text-sm md:text-base"
                >
                  antonio.telimban.jr@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 text-accent flex-shrink-0" size={18} />
                <a
                  href="tel:+6399195043421"
                  className="hover:text-accent transition-colors text-sm md:text-base"
                >
                  +63 919 504 3421
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 text-accent flex-shrink-0"
                  size={18}
                />
                <span className="text-sm md:text-base">
                  Cebu City, Province Of Cebu, Philippines
                </span>
              </div>

              <div className="flex items-center pt-4 md:pt-6 space-x-4">
                <a
                  href="https://github.com/suguspnk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="bg-primary-foreground/10 p-2.5 rounded-full text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 transform duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/suguspnk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="bg-primary-foreground/10 p-2.5 rounded-full text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 transform duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
              Send a Message
            </h3>
            <form
              ref={formElementRef}
              onSubmit={sendEmail}
              className="space-y-4"
            >
              <div>
                <label htmlFor="footer-name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="footer-name"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 rounded border bg-primary-foreground/5 border-primary-foreground/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-foreground placeholder:text-primary-foreground/60 transition-colors duration-200 text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="footer-email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 rounded border bg-primary-foreground/5 border-primary-foreground/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-foreground placeholder:text-primary-foreground/60 transition-colors duration-200 text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="footer-message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="footer-message"
                  placeholder="Your Message"
                  rows={4}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-3 rounded border bg-primary-foreground/5 border-primary-foreground/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-foreground placeholder:text-primary-foreground/60 transition-colors duration-200 text-sm md:text-base"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto bg-accent text-accent-foreground px-6 py-2.5 rounded font-medium hover:bg-opacity-90 transition-all hover:scale-105 transform disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary text-sm md:text-base"
                >
                  <Send size={18} />
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {statusMessage && (
                  <p
                    className={`text-sm text-center sm:text-left ${
                      statusType === 'success'
                        ? 'text-green-300'
                        : statusType === 'error'
                        ? 'text-red-300'
                        : 'text-primary-foreground/80'
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 md:mt-20 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70 text-sm">
          <p className="flex items-center justify-center gap-1.5">
            Designed with
            <Heart size={14} className="text-accent" />
            by Antonio Telimban Jr
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
