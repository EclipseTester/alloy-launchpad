import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Leading Industry with 
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Precision & Excellence
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We are stockists, suppliers, manufacturers and exporters of a wide range of ferrous and non-ferrous metal products. 
                Catering to various industrial projects, we have earned the reputation as a dependable supplier among our vast client base.
              </p>
              
              <p>
                We specialize in non-ferrous metals and have brought together the full range of trading, stockholding, and processing 
                activities under one roof. Our core strength lies in metals like brass, copper, aluminum, gun metal, phosphor bronze, 
                beryllium copper, silicon bronze, and nickel alloys.
              </p>
              
              <p>
                In addition to raw materials, we also manufacture a complete range of pipe fittings such as butt weld, forged, 
                socket weld, and screwed fittings—including elbows, tees, reducers, stub ends, flanges, caps, nipples, couplings, 
                elbowlets, sockolets, weldolets, and fasteners like nuts, bolts, studs, and washers.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Learn More
              </Button>
              <Button variant="dark" size="lg">
                Download Catalog
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-dark p-8 rounded-2xl shadow-dark border border-dark-600">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Third party inspection and testing facilities from Govt. approved labs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Complete range of precision instrumentation fittings and valves</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Superior quality products with complete customer satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Headquartered in Mumbai with global supply capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Serving oil & gas, petrochemical, power plants, and marine industries</span>
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