
import React from 'react';
import { Mail, Phone, Shield, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001f3f] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                <Shield size={18} />
              </div>
              <span className="text-2xl font-black italic tracking-tighter">INTEGRITY</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering families with secure futures through personalized coverage and expert guidance from licensed professionals.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Twitter size={18} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400 uppercase tracking-widest text-xs">Know the Basics</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Life Insurance Basics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Final Expense Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medicare Guidance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IUL Deep Dive</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Commitment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Notice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consumer Health Data</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400 uppercase tracking-widest text-xs">Questions?</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold mb-1">Email Us</p>
                  <a href="mailto:secureyour@lifepolicywithshomari.com" className="text-slate-300 text-sm hover:text-white transition-colors">secureyour@lifepolicywithshomari.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold mb-1">Call Anytime</p>
                  <a href="tel:7372597704" className="text-slate-300 text-sm hover:text-white transition-colors">(737) 259-7704</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 text-[10px] text-slate-500 leading-relaxed space-y-4 max-w-5xl mx-auto text-center">
          <p>
            Final expense life insurance can be used by the beneficiary designated as needed rather than being limited to specific funeral services and providers. Final expense life policies will have a lower face value than most traditional term or whole life policies as they are intended for a specific purpose of covering those final costs rather than providing comprehensive support for surviving family members. This type of policy generally doesn’t require a medical exam, but premiums will be higher the older you are, and some benefit payouts may be limited during the first few years of coverage for those with significant health issues. Policy guarantees are based upon the claims-paying ability of the issuing life insurance company.
          </p>
          <p>
            This is a solicitation of Indexed Universal Life Insurance (IUL) policy. A licensed agent/producer may contact you. Coverage, products, and features may not be available in all states and will vary by policy. An IUL policy isn't directly invested in the stock market, but earns interest based upon the performance of an index, with an interest crediting floor, typically 0%. The cash value can decline even with a floor due to premiums and other costs. An IUL policy contains specific limitations, exclusions, termination provisions, and requirements for keeping it in force. Please see review your contact for full details. All guarantees are subject to the financial strength and claims-paying ability of the issuing life insurance company.
          </p>
          <p>
            Reducing or skipping premium payments will impact the amount of interest paid and may impact how long the policy lasts. Accessing the cash value of a policy will reduce the available cash surrender value and the death benefit. Any loans from a policy's cash value are subject to interest and the balance is deducted from your death benefit. A policy owner does not have the ability to make unlimited payments into the policy. If too much money is paid into the policy, it will become a Modified Endowment Contract (MEC) and withdrawals and loans will be taxable. The term “Simplified” indicates the use of a simple form of underwriting which can minimize the amount of time to secure life insurance coverage.
          </p>
          <p>
            The death benefit generally will not be paid if the insured’s death results from suicide, while sane or insane, within the contestability period. Instead, the benefit will pay the sum of the premiums paid since issue, less any loan and loan interest due and any withdrawals. Exclusions and limitations may vary by state and will vary by policy.
          </p>
          <p>
            This is a solicitation of insurance. A licensed agent/producer may contact you. Coverage, products, and features may not be available in all states, may vary by state, and will vary by policy. Rates may be higher due to tobacco use. Your rate and availability for this product will be subject to underwriting. Policies contain specific limitations, exclusions, termination provisions, and requirements for keeping them in force. Please see your policy or contact the insurance company for full details. Approval is based on your answers to the questions on the application and information obtained from other sources. All guarantees are based on the claims paying ability of the life insurance company.
          </p>
          <p className="pt-8">© {new Date().getFullYear()} Shomari Williams. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
