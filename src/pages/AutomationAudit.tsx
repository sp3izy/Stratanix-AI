import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function AutomationAudit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    practiceName: '',
    email: '',
    phone: '',
    missedCalls: '',
    painPoints: [] as string[]
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'calendly'>('form');
  const [calendlyInitialized, setCalendlyInitialized] = useState(false);

  const painPointOptions = [
    'Calls going to voicemail',
    'Missed after-hours bookings',
    'Long wait times',
    'Appointments not being confirmed',
    'Patients hanging up',
    'Cost inefficiency',
    'Missed Calls Per Week',
    'High receptionist workload'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (point: string) => {
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(point)
        ? prev.painPoints.filter(p => p !== point)
        : [...prev.painPoints, point]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  useEffect(() => {
    if (activeTab === 'calendly' && !calendlyInitialized) {
      if ((window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/bookreservation/ai-demo',
          parentElement: document.querySelector('.calendly-inline-widget')
        });
        setCalendlyInitialized(true);
      } else {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          if ((window as any).Calendly) {
            (window as any).Calendly.initInlineWidget({
              url: 'https://calendly.com/bookreservation/ai-demo',
              parentElement: document.querySelector('.calendly-inline-widget')
            });
            setCalendlyInitialized(true);
          }
        };
        document.body.appendChild(script);
      }
    }
  }, [activeTab, calendlyInitialized]);

  return (
    <div className="min-h-screen bg-charcoal text-arctic-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity min-w-fit">
            <Phone className="w-6 md:w-8 h-6 md:h-8 text-electric-cobalt" />
            <span className="text-lg md:text-2xl font-bold tracking-tight">STRATANIX</span>
          </button>
          <button onClick={() => navigate('/')} className="flex items-center gap-2 px-3 md:px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm md:text-base">
            <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
            Back
          </button>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 px-4 md:px-6 min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-electric-cobalt/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-electric-cobalt/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-4xl mx-auto w-full z-10">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Get Your Free Call Audit</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 px-2">
              See exactly how many bookings you're missing and what our AI could save you.
            </p>
          </div>

          <div className="flex gap-2 md:gap-4 mb-8 border-b border-white/10 overflow-x-auto">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-4 md:px-6 py-2 md:py-3 font-semibold text-sm md:text-base transition-all duration-300 border-b-2 whitespace-nowrap min-h-[44px] flex items-center ${
                activeTab === 'form'
                  ? 'text-electric-cobalt border-electric-cobalt'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              Quick Form
            </button>
            <button
              onClick={() => setActiveTab('calendly')}
              className={`px-4 md:px-6 py-2 md:py-3 font-semibold text-sm md:text-base transition-all duration-300 border-b-2 whitespace-nowrap min-h-[44px] flex items-center ${
                activeTab === 'calendly'
                  ? 'text-electric-cobalt border-electric-cobalt'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              Book Demo
            </button>
          </div>

          {!submitted && activeTab === 'form' ? (
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div>
                  <label className="block text-xs md:text-sm font-semibold mb-2 md:mb-3">Practice Name</label>
                  <input
                    type="text"
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-500 focus:border-electric-cobalt focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="Your practice name"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold mb-2 md:mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-500 focus:border-electric-cobalt focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="you@practice.com"
                  />
                </div>
              </div>

              <div className="mb-6 md:mb-8">
                <label className="block text-xs md:text-sm font-semibold mb-2 md:mb-3">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-500 focus:border-electric-cobalt focus:outline-none transition-colors text-sm md:text-base"
                  placeholder="+44 (0) 20 0000 0000"
                />
              </div>

              <div className="mb-6 md:mb-8">
                <label className="block text-xs md:text-sm font-semibold mb-3 md:mb-4">Your Biggest Pain Points (Select All That Apply)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  {painPointOptions.map((point) => (
                    <label key={point} className="flex items-center gap-3 cursor-pointer p-2 md:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors min-h-[44px]">
                      <input
                        type="checkbox"
                        checked={formData.painPoints.includes(point)}
                        onChange={() => handleCheckboxChange(point)}
                        className="w-4 h-4 rounded border-white/20 text-electric-cobalt cursor-pointer"
                      />
                      <span className="text-xs md:text-sm">{point}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 md:px-8 py-3 md:py-4 bg-electric-cobalt hover:bg-electric-cobalt/90 text-white rounded-lg font-semibold text-sm md:text-lg transition-all duration-300 hover:scale-105 min-h-[44px]"
              >
                Get My Audit Report
              </button>

              <p className="text-xs md:text-sm text-gray-500 text-center mt-4 md:mt-6">
                We'll analyze your call patterns and send a custom report within 24 hours.
              </p>
            </form>
          ) : submitted && activeTab === 'form' ? (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-12 text-center">
              <CheckCircle className="w-12 md:w-16 h-12 md:h-16 text-electric-cobalt mx-auto mb-4 md:mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Audit Request Received!</h2>
              <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 px-2">
                Thanks for the details. Our team will analyze your call patterns and send you a custom report within 24 hours, showing exactly how many bookings you're missing.
              </p>
              <p className="text-gray-500 text-sm md:text-base">
                Redirecting to home page...
              </p>
            </div>
          ) : activeTab === 'calendly' ? (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-12">
              <div className="mb-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Schedule Your Demo</h3>
                <p className="text-gray-400 text-sm md:text-base px-2">
                  Book a time for a quick 15-minute demo. We'll show you how the AI handles calls, show real booking examples, and answer any questions.
                </p>
              </div>
              <div className="w-full overflow-hidden">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/bookreservation/ai-demo"
                  style={{ minWidth: '320px', width: '100%', height: '650px', maxWidth: '100%' }}
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
