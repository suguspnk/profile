import emailjs from '@emailjs/browser';
import { Github, Heart, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const formElementRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formElementRef.current) return;
    if (isSending) return;

    setIsSending(true);
    setStatusMessage('Sending...');

    const serviceID = 'service_fre8c8l';
    const templateID = 'template_zhjs0ya';
    const publicKey = 'fMGBVjMf1XWaU1nDy';

    // Prepare the parameters for the EmailJS template
    const templateParams = {
      title: 'New Message from Portfolio', // You can customize this title
      name: name, // Maps to {{name}} in your template
      email: email, // Sending email address - might be useful for 'reply-to' in EmailJS settings
      time: new Date().toLocaleString(), // Maps to {{time}} in your template
      message: message, // Maps to {{message}} in your template
    };

    emailjs
      // Use emailjs.send instead of sendForm
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          setStatusMessage('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
          setTimeout(() => setStatusMessage(''), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setStatusMessage('Failed to send message. Please try again.');
          setTimeout(() => setStatusMessage(''), 5000);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <footer
      id="contact"
      className="section bg-resume-primary text-white py-16 relative overflow-hidden"
      style={{ '--delay': 5 } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-[url('/src/assets/code-pattern.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Get In <span className="text-resume-accent">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div
            ref={contactRef}
            className="transform translate-y-10 opacity-0 transition-all duration-700"
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <Mail
                  className="mr-4 text-resume-accent flex-shrink-0"
                  size={20}
                />
                <a
                  href="mailto:antonio.telimban.jr@gmail.com"
                  className="hover:text-resume-accent transition-colors break-all"
                >
                  antonio.telimban.jr@gmail.com
                </a>
              </div>

              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <Phone
                  className="mr-4 text-resume-accent flex-shrink-0"
                  size={20}
                />
                <a
                  href="tel:+639068925683"
                  className="hover:text-resume-accent transition-colors"
                >
                  +63 906 892 5683
                </a>
              </div>

              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <MapPin
                  className="mr-4 text-resume-accent flex-shrink-0"
                  size={20}
                />
                <span>Cebu City, Province Of Cebu, CEB 6000</span>
              </div>

              <div className="flex items-center mt-8 space-x-4">
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-resume-accent transition-colors hover:scale-110 transform"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-resume-accent transition-colors hover:scale-110 transform"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div
            ref={formRef}
            className="transform translate-y-10 opacity-0 transition-all duration-700"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form ref={formElementRef} onSubmit={sendEmail}>
              <div className="mb-4 transform hover:translate-y-[-2px] transition-transform">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-resume-accent text-white"
                />
              </div>

              <div className="mb-4 transform hover:translate-y-[-2px] transition-transform">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-resume-accent text-white"
                />
              </div>

              <div className="mb-4 transform hover:translate-y-[-2px] transition-transform">
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-resume-accent text-white"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-resume-accent text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {statusMessage && (
                  <p className="text-sm ml-4">{statusMessage}</p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center text-white/70">
          <p className="flex items-center justify-center">
            Designed with{' '}
            <Heart
              size={16}
              className="mx-1 text-resume-accent animate-pulse"
            />{' '}
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
