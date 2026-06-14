import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Wrench, 
  Users, 
  PoundSterling,
  ArrowRight,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';
import * as Accordion from '@radix-ui/react-accordion';

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative bg-primary pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/20">
                <span className="flex h-2 w-2 rounded-full bg-white"></span>
                <span className="text-white text-xs font-medium tracking-wide uppercase">Stress-Free Property Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                Maximise Your <span className="text-white relative inline-block">
                  Rental Income
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-white/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
                </span> <br/>With Zero Stress.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                We handle the compliance, the late night maintenance calls, and the tenant sourcing. You enjoy the consistent revenue and peace of mind.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <Link to="/valuation" className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-md text-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <span>Get Free Rental Valuation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link text-white to="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-md text-center transition-all flex items-center justify-center space-x-2">
                  <span>Speak To A Manager</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold text-xl">100%</span>
                  <span>Compliance</span>
                </div>
                <div className="hidden sm:flex items-center space-x-2 border-l border-slate-700 pl-6">
                  <span className="text-white font-bold text-xl">15+</span>
                  <span>Years Exp.</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image/Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4 blur-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary-light"></div>
                 <div className="flex items-center justify-between mb-8">
                   <div>
                     <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Portfolio Performance</p>
                     <h3 className="text-2xl font-bold text-primary">£42,500 <span className="text-sm font-normal text-gray-500">/mo</span></h3>
                   </div>
                   <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                     <TrendingUp className="w-4 h-4" />
                     <span>+12.5%</span>
                   </div>
                 </div>
                 
                 <div className="space-y-4">
                   {[
                     { label: 'Occupancy Rate', value: '99.2%', status: 'green' },
                     { label: 'Avg. Void Period', value: '4 Days', status: 'green' },
                     { label: 'Compliance Status', value: '100% Up to Date', status: 'blue' }
                   ].map((stat, i) => (
                     <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                       <span className="text-gray-600 font-medium">{stat.label}</span>
                       <span className={cn(
                         "font-bold",
                         stat.status === 'green' ? "text-green-700" : "text-secondary"
                       )}>{stat.value}</span>
                     </div>
                   ))}
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-gray-200">
                   <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-primary" />
                     </div>
                     <div>
                       <p className="text-sm font-semibold text-gray-900">Rent Disbursed</p>
                       <p className="text-xs text-gray-500">Processed today at 09:00 AM</p>
                     </div>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY LANDLORDS CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Portfolio Landlords Trust Sher Gul</h2>
            <p className="text-lg text-gray-600">
              We don't just collect rent. We actively manage your asset to ensure long-term appreciation, regulatory compliance, and consistent cash flow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Bulletproof Compliance', desc: 'From EPCs to gas safety and licensing, we absorb the legal liability and ensure your properties are 100% compliant.' },
              { icon: Users, title: 'Rigorous Tenant Screening', desc: 'We only place tenants who pass comprehensive financial, background, and historical reference checks.' },
              { icon: PoundSterling, title: 'Precise Rent Collection', desc: 'Proactive rent collection and guaranteed rent options mean you get paid on time, every time.' },
              { icon: Wrench, title: 'In-House Maintenance', desc: 'Access out-of-hours trusted contractors at trade prices without the markup typical of high street agencies.' },
              { icon: TrendingUp, title: 'Yield Optimisation', desc: 'Regular rent reviews against live market data to ensure your portfolio performs at its absolute peak.' },
              { icon: Building2, title: 'Single Point of Contact', desc: 'No call centres. You get a dedicated, senior property manager who knows your properties inside out.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background pt-10 px-8 pb-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE PROCESS */}
      <section className="py-24 bg-background border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Onboarding</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Seamless Switch Guarantee</h2>
            <p className="text-lg text-gray-600">
              Switching from self-management or another agent is effortless. We handle the paperwork, communicate with existing tenants, and organize the transfer.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy Call', desc: 'A brief consultation to understand your portfolio, goals, and current pain points.' },
              { step: '02', title: 'Property Audit', desc: 'We assess market value, compliance gaps, and potential uplift opportunities.' },
              { step: '03', title: 'Tenant Transition', desc: 'If occupied, we introduce ourselves to tenants. If empty, we begin priority marketing.' },
              { step: '04', title: 'Ongoing Management', desc: 'Sit back. Receive monthly clear statements, proactive updates, and steady income.' }
            ].map((s, idx) => (
              <div key={idx} className="relative">
                {idx !== 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-gray-300 to-transparent"></div>}
                <div className="bg-white w-16 h-16 rounded-full border-4 border-background shadow-md flex items-center justify-center font-bold text-xl text-primary mb-6 relative z-10">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PAIN POINTS (PAS Framework) */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Stop Treating Your Investment Like A Second Job.</h2>
              
              <div className="space-y-6">
                {[
                  { title: "The Problem", text: "Late night calls for broken boilers, chasing late rent payments, and navigating a minefield of over 170 pieces of landlord legislation.", icon: X },
                  { title: "The Agitation", text: "One compliance slip-up can lead to severe fines. A bad tenant can cost thousands in lost rent and legal fees. Your 'passive' income is anything but.", icon: null },
                  { title: "The Solution", text: "Sher Gul acts as a firewall between you and the daily friction of property management. We enforce the rules, fix the problems, and forward the profits.", icon: CheckCircle2 }
                ].map((item, i) => (
                  <div key={i} className={cn(
                    "p-6 rounded-xl border",
                    i === 2 ? "bg-white/10 border-white/50" : "bg-primary-light border-white/10"
                  )}>
                    <h3 className={cn(
                      "text-xl font-bold mb-3 flex items-center space-x-2",
                      "text-white"
                    )}>
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 p-8 text-center border-2 border-dashed border-white/20 m-4 rounded-xl">
                      [ High-Quality Photograph of a modern UK property exterior or interior to be placed here ]
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute bottom-8 right-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                           <CheckCircle2 className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Issue Resolved</p>
                          <p className="text-slate-300 text-sm">Boiler repair completed. Tenant notified.</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">NO ACTION REQUIRED FROM LANDLORD</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Clear, transparent answers to common landlord queries.</p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              { q: 'How long does it take to find a tenant?', a: 'Our average void period is just 4 days between tenancies. We begin marketing the property proactively 6-8 weeks before the current agreement ends to ensure a seamless transition.' },
              { q: 'What happens if the tenant damages the property?', a: 'We protect all deposits in a government-approved scheme. We conduct thorough inventories before check-in and detailed check-out reports. If there are damages beyond rare fair wear and tear, we handle the deposit deduction negotiations on your behalf.' },
              { q: 'Are there any hidden fees?', a: 'Absolutely not. We believe in radical transparency. Our management fee covers all day-to-day operations. We do not add hidden markups to contractor maintenance invoices.' },
              { q: 'How do you handle maintenance emergencies?', a: 'We operate a 24/7 dedicated emergency line for tenants. Our network of vetted, trusted local contractors means we can deploy plumbers or electricians immediately, mitigating damage to your asset.' }
            ].map((faq, idx) => (
              <Accordion.Item key={idx} value={`item-${idx}`} className="bg-white border border-gray-200 rounded-lg overflow-hidden data-[state=open]:shadow-md transition-all">
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex-1 flex items-center justify-between px-6 py-5 text-left text-lg font-semibold text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary/50 group">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-gray-600 px-6 pb-5 pt-0 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="pt-2 border-t border-gray-100 mt-2">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* SECTION 8: VALUATION CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-background border border-gray-200 rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Are You Getting Maximum Yield?</h2>
               <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                 Find out exactly what your property should be earning in today's market, and discover how our management can increase your net returns.
               </p>
               <Link to="/valuation" className="inline-flex items-center space-x-3 bg-primary hover:bg-primary-light text-white font-bold px-10 py-5 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                 <span>Get Your Premium Valuation</span>
                 <ArrowRight className="w-6 h-6" />
               </Link>
               <p className="mt-6 text-sm text-gray-500 font-medium">No obligation. 100% Free Data-Driven Analysis.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Temporary X icon since it was used in PAS framework mapping but only implicitly imported before
function X(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
