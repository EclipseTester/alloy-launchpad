import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";

const HeroCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const slides = [
    {
      image: carousel1,
      alt: "Modern industrial steel mill with molten metal processing and blue accent lighting",
      title: "Premium Steel & Alloys",
      subtitle: "Industrial Excellence Since Decades"
    },
    {
      image: carousel2, 
      alt: "Precision CNC machining of aluminum parts with sparks and industrial lighting",
      title: "Precision Manufacturing",
      subtitle: "Advanced Metallurgical Solutions"
    },
    {
      image: carousel3,
      alt: "Organized warehouse of copper pipes and metal fittings with professional lighting",
      title: "Complete Product Range",
      subtitle: "Ferrous & Non-Ferrous Materials"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-800/80 to-dark-700/70"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="text-white">
                        <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                          {slide.title.split(' ').map((word, i) => (
                            <span key={i} className={i === 0 ? "block" : "block text-primary"}>
                              {word}
                            </span>
                          ))}
                        </h1>
                        
                        <p className="text-2xl lg:text-3xl mb-8 text-dark-100 leading-relaxed font-light">
                          {slide.subtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                            Request Quote
                          </Button>
                          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-dark-400 text-white hover:bg-white/10">
                            View Products
                          </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-dark-400/30">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">50+</div>
                            <div className="text-dark-200 text-sm">Years Experience</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                            <div className="text-dark-200 text-sm">Products</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">ISO</div>
                            <div className="text-dark-200 text-sm">Certified</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 bg-dark-800/50 border-dark-600 text-white hover:bg-dark-700/80" />
        <CarouselNext className="right-8 bg-dark-800/50 border-dark-600 text-white hover:bg-dark-700/80" />
      </Carousel>
    </section>
  );
};

export default HeroCarousel;