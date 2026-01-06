const GallerySection = () => {
  // Placeholder for gallery images - will be replaced with actual photos
  const galleryItems = [
    { id: 1, label: "Výhled z terasy" },
    { id: 2, label: "Obývací pokoj" },
    { id: 3, label: "Ložnice" },
    { id: 4, label: "Kuchyň" },
    { id: 5, label: "Koupelna" },
    { id: 6, label: "Okolní příroda" },
  ];

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
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              {/* Placeholder - will be replaced with actual images */}
              <div
                className={`bg-gradient-to-br from-forest/20 to-mountain/30 ${
                  index === 0 ? "aspect-square sm:aspect-auto sm:h-full min-h-[300px]" : "aspect-[4/3]"
                } flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
                <span className="relative z-10 text-foreground/50 font-medium text-sm bg-background/50 px-4 py-2 rounded-lg">
                  {item.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-display text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
