import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Leading the Industry with 
              <span className="block bg-gradient-metallic bg-clip-text text-transparent">
                Precision & Excellence
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                For over five decades, MetalCorp has been at the forefront of metallurgical innovation, 
                providing industry-leading solutions to clients across aerospace, automotive, construction, 
                and specialized manufacturing sectors.
              </p>
              
              <p>
                Our state-of-the-art facilities combine traditional craftsmanship with cutting-edge 
                technology, ensuring every product meets the highest standards of quality, durability, 
                and performance.
              </p>
              
              <p>
                From precision alloy development to custom fabrication services, we deliver solutions 
                that exceed expectations and drive industrial advancement.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Learn More
              </Button>
              <Button variant="steel" size="lg">
                Download Catalog
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-steel p-8 rounded-2xl shadow-steel">
              <h3 className="text-2xl font-bold text-steel-900 mb-4">Why Choose MetalCorp?</h3>
              <ul className="space-y-4 text-steel-800">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>ISO 9001:2015 certified manufacturing processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Advanced metallurgical testing and quality assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Global supply chain with local expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Custom solutions tailored to your specifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Sustainable and environmentally responsible practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;