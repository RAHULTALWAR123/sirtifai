import Image from "next/image";
import Link from "next/link";

export const FaqHero = () => {
  const ctas = [
    {
      icon: "/assets/faq-icons/whatsapp.png",
      text: "Chat with Us",
      href: "https://wa.me/+917013540039", // Replace with your WhatsApp number
    },
    {
      icon: "/assets/faq-icons/email.svg",
      text: "Email Us",
      href: "mailto:info@sirtfai.com", // 👈 Email link here
    },
    // {
    //   icon: "/assets/faq-icons/phone.svg",
    //   text: "Call Us",
    //   href: "tel:+919999999999", // Optional phone support
    // },
  ];

  return (
    <section className="w-full relative min-h-[400px] h-auto py-10 sm:py-16 md:py-20 px-3 sm:px-6 md:px-10 flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10">
      <Image
        className="w-full h-full absolute z-[1] top-0 left-0 object-cover"
        src="/assets/faq-banner.jpg"
        alt="Background"
        width={1920}
        height={1080}
        priority
      />
      <div className="relative z-[3] w-full lg:w-[50%] flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-[50px]">
        <h1 className="text-white font-semibold font-inter leading-[130%] text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.75rem]">
          We&apos;re Here to Help – Anytime, Anywhere
        </h1>

        <p className="text-white text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem] leading-[140%] font-medium font-inter">
          From plan selection to certification verification and lifetime career
          support — this is your one-stop hub for answers, guidance, and
          assistance.
        </p>

        <div className="w-full flex flex-wrap justify-start items-center gap-4 sm:gap-6 md:gap-10">
          {ctas.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              className="flex justify-center items-center gap-2 sm:gap-3"
            >
              <Image
                src={item.icon}
                alt={item.text}
                width={36}
                height={36}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-white font-medium leading-[100%] text-[0.95rem] sm:text-[1rem] md:text-[1.25rem] font-inter">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full relative z-[2] lg:w-[50%] lg:h-full flex justify-end items-end mt-6 lg:mt-0">
        <div className="w-full bg-[#000]/[12%] flex justify-start items-center gap-2 p-2 sm:gap-2.5 sm:p-2.5 rounded-md overflow-x-auto scrollbar-thin scrollbar-thumb-[#FE7743]/40">
          <p className="leading-[140%] text-[#FE7743] font-medium text-[1.1rem] sm:text-[1.5rem] font-inter whitespace-nowrap">
            Join Now :
          </p>
          <Link
            href="/freelancer"
            className="text-white font-semibold leading-[100%] text-[0.95rem] sm:text-[1rem] md:text-[1.25rem] whitespace-nowrap"
          >
            Post Graduate Certificate in Applied Profession
          </Link>
        </div>
      </div>
    </section>
  );
};
