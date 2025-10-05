/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Facebook, Youtube, Mail, HelpCircle, MessageCircle, Instagram } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Footer = () => {
  const router = useRouter();

  const handleLegalNavigation = (hash: string) => {
    router.push(`/legal-policies${hash}`);
  };

  const handleQuickLinkNavigation = (path: string) => {
    if (path !== "#") {
      router.push(path);
    }
  };

  useEffect(() => {
    // Knock Knock widget loader
    const kkId = "knock-knock-widget";
    if (!document.getElementById(kkId)) {
      (window as any).company_id = "6896e165537c28a8a9cbddb9";
      const script = document.createElement("script");
      script.id = kkId;
      script.src = "https://api.knock-knockapp.com/widget/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const scriptId = "sj-widget";

    if (!document.getElementById(scriptId)) {
      const rC: string[] = [];
      const elements = document.querySelectorAll('[class*="stjr-"]');
      elements.forEach((el) => {
        el.classList.forEach((cl) => {
          if (/^stjr-/.test(cl)) {
            rC.push(cl);
          }
        });
      });

      const uRC = [...new Set(rC)];

      const js = document.createElement("script") as HTMLScriptElement;
      js.id = scriptId;
      js.src =
        "https://www.sitejabber.com/js/v2/689457ff46956/widgets.js" +
        (uRC.length ? "?widget-classes=" + uRC.join("|") : "?widget-classes=stjr-base");

      const t = document.getElementsByTagName("script")[0];
      if (t && t.parentNode) {
        t.parentNode.insertBefore(js, t);
      }
    }
  }, []);

  return (
    <>
      <footer className="w-full bg-[#FEF7F1] pt-16 pb-8 relative">
        <div className="w-full relative ">
          {/* Orange separator line */}
          <div className="w-full h-0.5 bg-orange-500 mb-16"></div>

          <img
            className="absolute w-[150px] h-[150px] top-0 right-0"
            src="/assets/spring.png"
            alt="Spring"
          />

          {/* Main footer content */}
          <div className="max-w-7xl mx-auto px-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Left Section: Get in Touch with Sirtifai */}
            <div className="lg:col-span-2">
              {/* Logo and Heading */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-md overflow-hidden">
                  <img
                    src="/assets/logo.png"
                    alt="Sirtifai Logo"
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Get in Touch with Sirtifai
                </h3>
              </div>

              {/* Email Input and Button */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-md">
                  Build Future
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 mb-8">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer">
                  <Facebook size={20} />
                </div>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer">
                  <Instagram size={20} />
                </div>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer">
                  <Youtube size={20} />
                </div>
              </div>

              {/* Recognitions */}
              <div className="text-sm text-gray-500">
                Recognitions: FERPA Compliance. | ISO: 9001:2015 | GST Registered
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Legal</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLegalNavigation("#terms");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLegalNavigation("#cancellation");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancellation Policy
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLegalNavigation("#cookies");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cookies Policy
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLegalNavigation("#privacy");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLegalNavigation("#refund");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Refunds
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Contact</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  info@sirtifai.com
                </a>
                {/* <a
                  href="#"
                  className="flex items-center text-gray-800 hover:text-gray-800 transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  Phone
                </a> */}
                <a
                  href="/contact"
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <HelpCircle size={16} className="mr-2" />
                  Contact
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkNavigation("/");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkNavigation("/about");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  About Us
                </a>
                {/* <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkNavigation("/program");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Programs
                </a> */}
                {/* <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkNavigation("/contact");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Contact
                </a> */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkNavigation("/faq");
                  }}
                  className="block text-gray-600 hover:text-gray-800 transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="stjr-badge"></div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">©Sirtifai 2025</div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917013540039"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
};
