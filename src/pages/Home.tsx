import { ArrowRight, Phone, MessageSquare, BarChart3, Clock, ChevronDown, Play, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as React from 'react';

export function Home() {
  return (
    <div className="min-h-screen bg-charcoal text-arctic-white overflow-hidden">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Framework />
      <Demo />
      <FAQ />
      <Footer />
    </div>
  );
}

function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity min-w-fit">
          <Phone className="w-6 md:w-8 h-6 md:h-8 text-electric-cobalt" />
          <span className="text-lg md:text-2xl font-bold tracking-tight">STRATANIX</span>
        </button>
        <button onClick={() => navigate('/audit')} className="px-4 md:px-6 py-2 md:py-2.5 bg-electric-cobalt hover:bg-electric-cobalt/90 text-white rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center">
          Book Demo
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-electric-cobalt/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-electric-cobalt/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem]" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight">
          Never Miss a<br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cobalt to-blue-400 block">
            Call Again
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
          AI Receptionist Answers 24/7, Books Appointments, Works While You Operate
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center flex-wrap w-full px-2">
          <button onClick={() => navigate('/audit')} className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-electric-cobalt hover:bg-electric-cobalt/90 text-white rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-electric-cobalt/20 min-h-[44px]">
            Get Free Call Audit
            <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => navigate('/how-it-works')} className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold text-sm md:text-base transition-all duration-300 min-h-[44px] flex items-center justify-center">
            See How It Works
          </button>
          <button onClick={() => document.getElementById('hear-it-section')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px]">
            <Play className="w-4 md:w-5 h-4 md:h-5" />
            Hear It in Action
          </button>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-2">
          {[
            { value: '£24K', label: 'Year Saved vs Staff' },
            { value: '100%', label: 'Call Answer Rate' },
            { value: '3x', label: 'More After-Hours Bookings' }
          ].map((stat, i) => (
            <div key={i} className="p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-electric-cobalt mb-2">{stat.value}</div>
              <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-electric-cobalt/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {[
            { icon: Phone, title: 'Answer Every Call', desc: 'Never miss a patient call, even after hours' },
            { icon: Clock, title: 'Instant Bookings', desc: 'Book appointments 24/7 automatically' },
            { icon: MessageSquare, title: 'Smart Follow-Up', desc: 'Text missed callers instantly with callback' }
          ].map((item, i) => (
            <div key={i} className="p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
              <item.icon className="w-8 md:w-10 h-8 md:h-10 text-electric-cobalt mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Phone,
      title: 'AI Call Answering',
      description: 'Your AI receptionist answers every incoming call, qualifies patients, and books appointments directly into your calendar.',
      features: ['24/7 availability', 'Natural conversations', 'Direct calendar sync']
    },
    {
      icon: MessageSquare,
      title: 'Missed Call Text-Back',
      description: 'Instantly SMS patients who hang up or call during busy times. They can book online or request a callback—no missed revenue.',
      features: ['Automatic SMS trigger', 'Online booking link', 'Callback requests']
    },
    {
      icon: BarChart3,
      title: 'Call Analytics',
      description: 'Every call recorded, transcribed, and logged. See which treatments drive bookings, peak times, and patient patterns.',
      features: ['Full call history', 'Patient insights', 'Performance metrics']
    }
  ];

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Complete Patient Communication
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Answer calls, book appointments, and never lose revenue to missed calls
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-electric-cobalt/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 md:w-16 h-12 md:h-16 bg-electric-cobalt/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-electric-cobalt/20 transition-colors">
                <service.icon className="w-6 md:w-8 h-6 md:h-8 text-electric-cobalt" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>

              <ul className="space-y-2 md:space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                    <div className="w-2 h-2 bg-electric-cobalt rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Framework() {
  const steps = [
    {
      number: '01',
      title: 'Free Call Audit',
      description: 'Analyze your incoming calls to identify missed opportunities and revenue loss.',
      highlight: 'Understanding'
    },
    {
      number: '02',
      title: 'Build Your AI',
      description: 'We train your AI receptionist on your services, appointment types, and booking rules.',
      highlight: 'Customization'
    },
    {
      number: '03',
      title: 'Go Live in 24h',
      description: 'Forward your number, test a few calls, and start answering patients automatically.',
      highlight: 'Deployment'
    },
    {
      number: '04',
      title: 'Monthly Optimisation',
      description: 'We monitor performance, handle edge cases, and continuously improve your AI.',
      highlight: 'Growth'
    }
  ];

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 relative bg-gradient-to-b from-transparent via-electric-cobalt/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Launch in 4 Simple Steps
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            From audit to live AI receptionist in less than 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative">
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-cobalt/0 via-electric-cobalt/50 to-electric-cobalt/0" />

          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-charcoal border-2 border-electric-cobalt/30 rounded-2xl p-4 md:p-6 hover:border-electric-cobalt transition-all duration-300 relative z-10">
                <div className="text-3xl md:text-5xl font-bold text-electric-cobalt/20 mb-2 md:mb-3">{step.number}</div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">{step.title}</h3>
                <div className="inline-block px-2 md:px-3 py-1 bg-electric-cobalt/10 border border-electric-cobalt/30 rounded-full text-xs text-electric-cobalt mb-3">
                  {step.highlight}
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.description}</p>
              </div>
              <div className="hidden md:block absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-electric-cobalt rounded-full flex items-center justify-center z-20 border-4 border-charcoal" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demo() {
  const [playing, setPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setPlaying(false);
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <section id="hear-it-section" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">Hear It in Action</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-2">
            Listen to our AI book a dental consultation in 45 seconds
          </p>
        </div>

        <div className="bg-gradient-to-br from-electric-cobalt/20 to-electric-cobalt/5 border border-electric-cobalt/30 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center min-h-80 md:min-h-96">
          <audio
            ref={audioRef}
            src="https://raw.githubusercontent.com/lfigueira0307-del/stratanix-assets/main/recording%20(1)%20(1).mp3"
          />

          <button
            onClick={handlePlayPause}
            className="group mb-6 md:mb-8 w-16 h-16 md:w-20 md:h-20 bg-electric-cobalt hover:bg-electric-cobalt/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl shadow-electric-cobalt/30 min-h-[44px]"
          >
            <Play className="w-6 md:w-8 h-6 md:h-8 text-white fill-white" />
          </button>

          {playing && (
            <div className="mb-4 md:mb-6 text-center">
              <div className="text-gray-400 mb-3 md:mb-4 text-sm">Playing demo call...</div>
              <div className="flex gap-1 justify-center">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-0.5 md:w-1 bg-electric-cobalt rounded-full"
                    style={{
                      height: `${Math.random() * 24 + 8}px`,
                      animation: 'pulse 0.5s ease-in-out infinite',
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <p className="text-gray-400 text-center text-sm md:text-base px-2">
            "Good afternoon, thank you for calling. How can we help you today?"
          </p>
        </div>

        <p className="text-gray-500 text-center mt-6 md:mt-8 text-xs md:text-sm px-2">
          Real AI call demonstration. Booking confirmed in CRM instantly.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const faqs = [
    {
      question: "Will this replace my receptionist?",
      answer: "It can. One AI receptionist handles calls, bookings, and follow-ups 24/7 – no salary, no sick days, no holidays. Replace one full-time position and save £22-28k/year, or keep your team and capture every overflow call. Your choice, either way you win."
    },
    {
      question: "What if AI doesn't know an answer?",
      answer: "It takes a detailed message and texts your mobile instantly. For callers who specifically request to speak with you, it transfers directly to your phone. Everything – recordings, transcripts, contact details – lands in your CRM dashboard and email. You set the rules; we train it on your specific treatments so most booking enquiries are handled without interrupting you."
    },
    {
      question: "How long to set up?",
      answer: "24 hours. Sync calendar, forward number, test 5 calls."
    },
    {
      question: "Is it GDPR compliant?",
      answer: "Yes, UK/EU servers, 30-day auto-delete, full DPA."
    },
    {
      question: "What if I want to cancel?",
      answer: "Month-to-month, 3 days notice, no lock-in."
    }
  ];

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-transparent via-electric-cobalt/5 to-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-electric-cobalt/30 transition-colors"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-white/5 transition-colors min-h-[44px]"
              >
                <h3 className="text-sm md:text-lg font-semibold text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-4 md:w-5 h-4 md:h-5 text-electric-cobalt transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expanded === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expanded === i && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-relaxed border-t border-white/10 text-sm md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-electric-cobalt/10 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight px-2">
          Never Miss Another<br className="hidden sm:block" />
          Patient Call.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-12 px-2">
          Get your free call audit and see exactly how many bookings you're losing.
        </p>

        <button
          onClick={() => navigate('/audit')}
          className="group w-full sm:w-auto px-8 md:px-12 py-3 md:py-5 bg-electric-cobalt hover:bg-electric-cobalt/90 text-white rounded-lg font-semibold text-base md:text-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 md:gap-3 mx-auto shadow-2xl shadow-electric-cobalt/30 min-h-[44px]"
        >
          Book Your Free Demo
          <ArrowRight className="w-4 md:w-6 h-4 md:h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Phone className="w-5 md:w-6 h-5 md:h-6 text-electric-cobalt" />
              <span className="text-lg md:text-xl font-bold">STRATANIX</span>
            </button>

            <div className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              © 2024 Stratanix. AI Receptionists for Medical Practices.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
