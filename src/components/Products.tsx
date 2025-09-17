import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const productCategories = {
    nonferrous: {
      title: "Non-Ferrous Metals",
      products: [
        {
          name: "Aluminium Products",
          grades: "1050, 1060, 1100, 2011, 2024, 5052, 5083, 6061, 6063, 6082, 7075",
          icon: "⚙️"
        },
        {
          name: "Copper Products", 
          grades: "C11000, C10200, C12200, C12000",
          icon: "🔸"
        },
        {
          name: "Brass Products",
          grades: "IS 319, CZ121, CZ122, C36000, C26000, C27000",
          icon: "🟨"
        },
        {
          name: "Bronze Products",
          grades: "PB1, PB2, PB102, C51000, C52100, C54400",
          icon: "🟫"
        },
        {
          name: "Gunmetal Products",
          grades: "LG2, RG5, RG10, IS 318, C83600, C84400",
          icon: "⚒️"
        },
        {
          name: "Phosphor Bronze",
          grades: "PB1, PB2, C51000, C52100, C54400",
          icon: "🔶"
        },
        {
          name: "Aluminium Bronze",
          grades: "AB1, AB2, C95400, C95500, C95800, C63000, G-CuAl10Fe5Ni5",
          icon: "🔺"
        },
        {
          name: "Silicon Bronze",
          grades: "C65100, C65500, C65600, C66100, C64700",
          icon: "🔸"
        },
        {
          name: "Beryllium Copper",
          grades: "C17200, C17300, C17500, C17510",
          icon: "💎"
        },
        {
          name: "Nickel & Nickel Alloys",
          grades: "Nickel 200, 201, Monel 400, K500, Inconel 600, 625, Incoloy 800, 825, Hastelloy C22, C276",
          icon: "⚡"
        },
        {
          name: "Zinc Products",
          grades: "SHG, HG, PWG, ZAMAK 2, 3, 5, 7, ZA-8, ZA-12, ZA-27",
          icon: "🔷"
        },
        {
          name: "Lead Products",
          grades: "LME Grade, IS 27, ASTM B29, Pb-Sb, Pb-Ca, Pb-Se, Pb-Sn, Lead-Calcium, Lead-Antimony",
          icon: "🔘"
        }
      ]
    },
    ferrous: {
      title: "Ferrous Metals",
      products: [
        {
          name: "Carbon Steel Products",
          grades: "IS 2062, ASTM A36, C45, EN8, EN9, C40, C55, C60",
          icon: "🔩"
        },
        {
          name: "Alloy Steel Products", 
          grades: "EN19, EN24, 8620, 42CrMo4, 15CrMo5, EN353, EN31, 52100, O1, D2",
          icon: "⚙️"
        },
        {
          name: "Cast Iron Products",
          grades: "FG150–FG300, SG400–SG700, A532 (Ni-Hard), A47 (Malleable)",
          icon: "🔧"
        },
        {
          name: "Stainless Steel Products",
          grades: "304, 304L, 316, 316L, 310, 310S, 410, 420, 430, 440A/B/C, 2205, 2507, 17-4PH, 15-5PH",
          icon: "✨"
        }
      ]
    },
    marine: {
      title: "Marine & Engineering Components",
      products: [
        {
          name: "Propellers",
          grades: "LG2, AB2, Cu3Sn",
          icon: "🚢"
        },
        {
          name: "Impellers",
          grades: "PB2, CF8M (SS316), Nickel Aluminium Bronze",
          icon: "💫"
        },
        {
          name: "Pump Shafts",
          grades: "SS304, SS316, SS410, Duplex 2205",
          icon: "🔄"
        },
        {
          name: "Gunmetal Bushes",
          grades: "LG2, SAE 841, LTB2 (IS 318)",
          icon: "🔘"
        },
        {
          name: "Bronze Jobs",
          grades: "PB1, PB2, LG2, SAE 660",
          icon: "🔶"
        },
        {
          name: "Flanges",
          grades: "SS304, SS316L, IS 319 Brass",
          icon: "⭕"
        },
        {
          name: "Flange Nuts",
          grades: "SS316, Gunmetal LG2, IS 319 Brass",
          icon: "🔩"
        },
        {
          name: "Custom Shafts",
          grades: "Copper Custom Grade",
          icon: "🔧"
        },
        {
          name: "Valves & Fittings",
          grades: "Gunmetal, SS316, Bronze",
          icon: "🚰"
        }
      ]
    }
  };

  return (
    <section id="products" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive selection of ferrous and non-ferrous metals with precise specifications
          </p>
        </div>

        <Tabs defaultValue="nonferrous" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-dark-700 mb-12">
            <TabsTrigger value="nonferrous" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Non-Ferrous Metals
            </TabsTrigger>
            <TabsTrigger value="ferrous" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Ferrous Metals
            </TabsTrigger>
            <TabsTrigger value="marine" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Marine & Engineering
            </TabsTrigger>
          </TabsList>

          {Object.entries(productCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-dark-700 border-dark-600">
                    <CardHeader className="text-center pb-4">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                        <span className="font-medium text-primary">Grades:</span> {product.grades}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Products;