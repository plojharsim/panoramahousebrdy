import terraceDining from "@/assets/terrace-dining.png";
import terraceView from "@/assets/terrace-view.png";
import livingRoom from "@/assets/living-room.png";
import bedroom from "@/assets/bedroom.png";
import bathroom from "@/assets/bathroom.png";
import exteriorHouse from "@/assets/exterior-house.png";
import terraceBbq from "@/assets/terrace-bbq.png";
import gardenKids from "@/assets/garden-kids.png";
import exteriorPergola from "@/assets/exterior-pergola.png";

const galleryItems = [
  { id: 1, image: terraceView, label: "Terasa s výhledem", featured: true },
  { id: 2, image: livingRoom, label: "Obývací pokoj" },
  { id: 3, image: bedroom, label: "Ložnice" },
  { id: 4, image: bathroom, label: "Koupelna" },
  { id: 5, image: terraceBbq, label: "Venkovní gril" },
  { id: 6, image: gardenKids, label: "Zahrada pro děti" },
];

const GallerySection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Prohlédněte si náš <span className="text-primary">dům</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Moderní vybavení v harmonii s okolní přírodou. Každý detail byl
            navržen s ohledem na váš komfort.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div
                className={`${
                  index === 0 ? "aspect-square sm:aspect-auto sm:h-full min-h-[300px] lg:min-h-[500px]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-primary-foreground font-display text-xl font-semibold p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional exterior images */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500">
            <div className="aspect-[16/10]">
              <img
                src={exteriorHouse}
                alt="Exteriér domu"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="text-primary-foreground font-display text-xl font-semibold p-6">
                Exteriér domu
              </span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500">
            <div className="aspect-[16/10]">
              <img
                src={exteriorPergola}
                alt="Pergola a terasa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="text-primary-foreground font-display text-xl font-semibold p-6">
                Pergola a terasa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;