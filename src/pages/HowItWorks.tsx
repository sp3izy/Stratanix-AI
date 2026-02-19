import { ArrowLeft, Zap, Play, Code2, Rocket, Zap as ZapIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-charcoal text-arctic-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity min-w-fit">
            <Zap className="w-6 md:w-8 h-6 md:h-8 text-electric-cobalt" />
            <span className="text-lg md:text-2xl font-bold tracking-tight">STRATANIX</span>
          </button>
          <button onClick={() => navigate('/')} className="flex items-center gap-2 px-3 md:px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm md:text-base">
            <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
            Back
          </button>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 px-4 md:px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-electric-cobalt/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-electric-cobalt/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">How Stratanix Works</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
              Our proven framework transforms your manual processes into intelligent, scalable automation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 flex items-center gap-2 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-electric-cobalt/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl md:text-2xl font-bold text-electric-cobalt">01</span>
                </div>
                Discovery & Audit
              </h2>
              <p className="text-gray-400 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                We start by understanding your business deeply. Our team conducts a comprehensive audit of your current workflows, identifies bottlenecks, and maps out every manual process that's eating up your team's time.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {['Workflow mapping', 'Pain point identification', 'Opportunity assessment', 'ROI calculation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-xs md:text-sm">
                    <div className="w-2 h-2 bg-electric-cobalt rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-electric-cobalt/20 to-electric-cobalt/5 rounded-2xl p-8 md:p-12 border border-electric-cobalt/30 flex items-center justify-center min-h-80 md:min-h-96">
              <div className="text-center">
                <Code2 className="w-12 md:w-20 h-12 md:h-20 text-electric-cobalt mx-auto mb-3 md:mb-4 opacity-50" />
                <p className="text-gray-400 text-sm md:text-base">We analyze 50+ data points across your operations</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
            <div className="bg-gradient-to-br from-electric-cobalt/20 to-electric-cobalt/5 rounded-2xl p-8 md:p-12 border border-electric-cobalt/30 flex items-center justify-center min-h-80 md:min-h-96 order-2 md:order-1">
              <div className="text-center">
                <ZapIcon className="w-12 md:w-20 h-12 md:h-20 text-electric-cobalt mx-auto mb-3 md:mb-4 opacity-50" />
                <p className="text-gray-400 text-sm md:text-base">Custom architecture designed for your specific workflows</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 flex items-center gap-2 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-electric-cobalt/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl md:text-2xl font-bold text-electric-cobalt">02</span>
                </div>
                Design & Architecture
              </h2>
              <p className="text-gray-400 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                Based on the audit, we design a custom AI ecosystem tailored specifically to your operations. This includes intelligent workflows, custom AI agents, and integration strategies that seamlessly connect your existing tools.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {['System architecture', 'Integration planning', 'AI model selection', 'Security protocols'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-xs md:text-sm">
                    <div className="w-2 h-2 bg-electric-cobalt rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 flex items-center gap-2 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-electric-cobalt/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl md:text-2xl font-bold text-electric-cobalt">03</span>
                </div>
                Implementation
              </h2>
              <p className="text-gray-400 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                We deploy your automation systems with precision, conducting extensive testing to ensure everything works flawlessly. Your team gets comprehensive training and documentation so you can confidently manage and scale your new automation infrastructure.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {['System deployment', 'Thorough testing', 'Team training', 'Documentation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-xs md:text-sm">
                    <div className="w-2 h-2 bg-electric-cobalt rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-electric-cobalt/20 to-electric-cobalt/5 rounded-2xl p-8 md:p-12 border border-electric-cobalt/30 flex items-center justify-center min-h-80 md:min-h-96">
              <div className="text-center">
                <Rocket className="w-12 md:w-20 h-12 md:h-20 text-electric-cobalt mx-auto mb-3 md:mb-4 opacity-50" />
                <p className="text-gray-400 text-sm md:text-base">Launch your automation with 24/7 support</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-gradient-to-br from-electric-cobalt/20 to-electric-cobalt/5 rounded-2xl p-8 md:p-12 border border-electric-cobalt/30 flex items-center justify-center min-h-80 md:min-h-96 order-2 md:order-1">
              <div className="text-center">
                <Play className="w-12 md:w-20 h-12 md:h-20 text-electric-cobalt mx-auto mb-3 md:mb-4 opacity-50" />
                <p className="text-gray-400 text-sm md:text-base">Continuous optimization based on performance metrics</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 flex items-center gap-2 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-electric-cobalt/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl md:text-2xl font-bold text-electric-cobalt">04</span>
                </div>
                Optimization & Support
              </h2>
              <p className="text-gray-400 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                After launch, we continuously monitor performance, gather usage data, and optimize your automation systems. You get ongoing support and strategic guidance to maximize your ROI and scale as your business grows.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {['Performance monitoring', 'Continuous improvement', 'Strategic expansion', 'Ongoing support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-xs md:text-sm">
                    <div className="w-2 h-2 bg-electric-cobalt rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 md:mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
            <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 px-2">
              Schedule your free automation audit and discover exactly how much time and money you can save.
            </p>
            <button
              onClick={() => navigate('/audit')}
              className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 bg-electric-cobalt hover:bg-electric-cobalt/90 text-white rounded-lg font-semibold text-sm md:text-lg transition-all duration-300 hover:scale-105 min-h-[44px]"
            >
              Get Your Free Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
