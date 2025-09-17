import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-metallic bg-clip-text text-transparent">
              MetalCorp
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-steel-700 hover:text-primary transition-colors duration-300">
              Services
            </a>
            <a href="#about" className="text-steel-700 hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-steel-700 hover:text-primary transition-colors duration-300">
              Contact
            </a>
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;