
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Is MyIntegrity an insurance company?",
    a: "No. We are an insurance brokerage dedicated to providing people like you with helpful insurance coverage guidance. We’re here to help you:\n* Decide which kind of product or plan fits your specific needs.\n* Compare coverage that’s available to you\n* Choose coverage that fits your lifestyle and budget.\n* Enroll in or apply for coverage in the way that works best for you — by phone, online, or in person."
  },
  {
    q: "Is MyIntegrity part of a government agency?",
    a: "No. We are not affiliated with any government agency. However, as a life and health insurance agency, we follow the highest personal and ethical standards as we provide guidance to help people like you enroll or apply in the insurance coverage that’s right for you. Our Medicare sales practices follow strict guidelines as set by the Centers for Medicare & Medicaid Services (CMS)."
  },
  {
    q: "Are MyIntegrity representatives licensed to help me enroll in or apply for coverage?",
    a: "Yes. All our representatives are licensed insurance agents. This means they’re officially licensed in each state where we do business. This helps you to get the life insurance or Medicare coverage you need."
  },
  {
    q: "How does MyIntegrity get paid for helping me?",
    a: "MyIntegrity services are always free for you to use, with no obligation to enroll. When we help you find and apply for/enroll in the coverage that’s right for you, the insurance company that created the plan pays us a commission. It doesn’t cost you anything extra to work with us."
  },
  {
    q: "Can I get a discount on my plan if I work with MyIntegrity?",
    a: "Bottom line: Insurance costs can vary a great deal. Our licensed insurance agents can help you compare your coverage options. They often help people like you find coverage that’s most cost-effective, with additional plan benefits. For Medicare plans, Medicare insurance is closely regulated by the government — companies like MyIntegrity are not allowed to provide any plan discounts."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-black text-[#001f3f] text-center mb-16 italic">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-800 pr-8">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="p-8 pt-0 text-slate-500 leading-relaxed border-t border-slate-50 whitespace-pre-line">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
