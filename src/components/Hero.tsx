import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-metals.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern metals and alloys facility with precision machinery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-900/80 via-steel-800/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium
              <span className="block bg-gradient-to-r from-secondary to-secondary-muted bg-clip-text text-transparent">
                Metals & Alloys
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-steel-100 leading-relaxed">
              Industry-leading metallurgical solutions with uncompromising quality, 
              precision engineering, and decades of expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Request Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-steel-300 text-white hover:bg-white/10">
                View Catalog
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-steel-400/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-steel-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-steel-200 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">ISO</div>
                <div className="text-steel-200 text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;