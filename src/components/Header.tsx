
import { PenTool, BookOpen, Target, Sparkles, Award, Zap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="gradient-bg text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <div className="flex justify-center mb-8 fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-lg animate-pulse"></div>
            <PenTool size={80} className="relative text-white float-animation drop-shadow-2xl" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full pulse-glow flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
          </div>
        </div>
        
        <div className="slide-in-left">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Essay<span className="text-accent drop-shadow-lg">Spark</span>
            <span className="block text-4xl md:text-5xl font-light mt-3 opacity-95 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              AI Writing Coach
            </span>
          </h1>
        </div>
        
        <div className="fade-in-up delay-300">
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-95 leading-relaxed font-medium">
            Transform your writing with intelligent AI feedback. Get instant analysis on grammar, 
            structure, and coherence to elevate your essays to the next level.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base fade-in-up delay-500">
          <div className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full shadow-elegant interactive-hover">
            <BookOpen size={22} className="text-accent" />
            <span className="font-medium">Grammar Analysis</span>
          </div>
          <div className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full shadow-elegant interactive-hover">
            <Target size={22} className="text-accent" />
            <span className="font-medium">Structure Feedback</span>
          </div>
          <div className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full shadow-elegant interactive-hover">
            <Award size={22} className="text-accent" />
            <span className="font-medium">Style Improvement</span>
          </div>
          <div className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full shadow-elegant interactive-hover">
            <Zap size={22} className="text-accent" />
            <span className="font-medium">Instant Results</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
