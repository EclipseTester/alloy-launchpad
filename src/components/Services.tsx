import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Steel Alloys",
      description: "High-grade steel alloys for construction, automotive, and aerospace applications with superior strength and durability.",
      icon: "🏗️"
    },
    {
      title: "Aluminum Solutions", 
      description: "Lightweight aluminum alloys perfect for transportation, electronics, and marine industries with excellent corrosion resistance.",
      icon: "✈️"
    },
    {
      title: "Copper & Bronze",
      description: "Premium copper and bronze materials for electrical, plumbing, and decorative applications with outstanding conductivity.",
      icon: "⚡"
    },
    {
      title: "Specialty Metals",
      description: "Rare and specialty metals including titanium, nickel alloys, and precious metals for advanced industrial applications.",
      icon: "🔬"
    },
    {
      title: "Custom Fabrication",
      description: "Precision metal fabrication services tailored to your specifications with state-of-the-art machinery and expert craftsmanship.",
      icon: "⚙️"
    },
    {
      title: "Quality Testing",
      description: "Comprehensive material testing and certification services ensuring compliance with international standards and specifications.",
      icon: "🎯"
    }
  ];

  return (
    <section id="services" className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-metallic bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive metallurgical solutions backed by decades of expertise and cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-steel transition-all duration-300 hover:-translate-y-2 border-steel-200">
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;