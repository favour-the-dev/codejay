"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
  const faq = [
    {
      question: "How do I start trading with CodeJay Exchange?",
      answer:
        "Simply click the 'Send us a message' button or use our WhatsApp contact. Our team will guide you through the process, provide current rates, and help you complete your transaction securely.",
    },
    {
      question: "What cryptocurrencies do you support?",
      answer:
        "We support a wide range of cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, BNB, XRP, Solana (SOL), and many more. Contact us to inquire about specific cryptocurrencies.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers for Nigerian Naira transactions. For international payments, we support various methods including PayPal, Apple Pay, Cash App, Chime, Varo, Zelle, wire transfers, Western Union, and MoneyGram.",
    },
    {
      question: "What are your exchange rates?",
      answer:
        "We offer competitive rates that are updated in real-time based on market conditions. For the most current rates, please check our live rates section or contact us directly through WhatsApp.",
    },
    {
      question: "Do you offer trading signals and mentorship?",
      answer:
        "Yes! We provide professional trading signals and comprehensive mentorship programs for both cryptocurrency and forex trading. Our experienced team can help you develop effective trading strategies.",
    },
    {
      question: "How do I sell my gift cards?",
      answer:
        "We buy various gift cards at competitive rates. Simply message us with details of your gift card, and we'll provide you with a quote and guide you through our secure trading process.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We operate 24/7! Our team is always available to process your transactions and respond to your queries, ensuring you never miss a trading opportunity.",
    },
  ];

  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);

  const toggleCards = (index: number) => {
    setIsOpenIndex(isOpenIndex === index ? null : index);
  };

  return (
    <>
      <section
        id="faq"
        className="w-full py-10 p-5 h-full bg-background-gray dark:bg-foreground"
      >
        <div className="max-container flex flex-col items-center justify-center">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full flex flex-col gap-3"
          >
            <h2 className="font-Inter font-bold text-3xl md:text-4xl text-center">
              Frequently Asked{" "}
              <span className="text-forestgreen dark:text-secondary">
                Questions
              </span>
            </h2>
            <h3 className="text-gray-500 dark:text-gray-400 text-lg text-center mb-8">
              Get quick answers to common questions about our services
            </h3>
          </motion.header>
          <div className="w-full flex items-start justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full lg:max-w-1/2 h-[600px] relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-forestgreen-dark opacity-50 rounded-3xl" />
              <Image
                src="/images/trader.jpg"
                alt="faq"
                width={500}
                height={500}
                className="rounded-3xl object-cover w-full h-full"
              />
            </motion.div>
            {/* accordion */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:max-w-1/2 w-full lg:p-5 rounded-3xl flex flex-col gap-3"
            >
              {faq.map((obj, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1, // Stagger the animations
                  }}
                  viewport={{ once: true }}
                  key={index}
                  onClick={() => toggleCards(index)}
                  className="cursor-pointer bg-white dark:bg-darkLighter text-foreground dark:text-background 
                    opacity-95 rounded-xl px-6 py-4 flex justify-between hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-1">
                    <h3
                      className={`mb-2 text-sm sm:text-base md:text-lg ${
                        isOpenIndex === index &&
                        "font-semibold text-forestgreen dark:text-secondary"
                      }`}
                    >
                      {obj.question}
                    </h3>
                    <AnimatePresence>
                      {isOpenIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm sm:text-base md:text-lg tracking-wide text-gray-600 dark:text-gray-400">
                            {obj.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="text-forestgreen dark:text-secondary ml-4">
                    <motion.div
                      animate={{ rotate: isOpenIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpenIndex === index ? (
                        <MdKeyboardArrowUp className="text-3xl" />
                      ) : (
                        <RiArrowDropDownLine className="text-3xl" />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
