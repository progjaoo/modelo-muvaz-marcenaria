import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const showroomData = {
  Cozinha: [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556912177-c54030639a60?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=800&q=80",
  ],
  Closet: [
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558997519-53bb99096983?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616486332353-c9ffeb23d201?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
  ],
  Sala: [
    "https://images.unsplash.com/photo-1583847268964-b28dc2f51ec9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80",
  ],
  Escritório: [
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  ],
  "Área Gourmet": [
    "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556912177-c54030639a60?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1534349735244-2ad058c2bc2b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&w=800&q=80",
  ],
};

const Showroom = () => {
  const categories = Object.keys(showroomData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="ambientes" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-luxury-graphite tracking-tight mb-6 uppercase leading-tight max-w-4xl mx-auto"
          >
            Feitos sob medida para criar experiências únicas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-luxury-graphite/60 font-light text-lg md:text-xl max-w-2xl mx-auto"
          >
            Ambientes que mostram a essência do design autoral. Cada espaço é pensado para refletir seu estilo e transmitir exclusividade.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
                activeCategory === category ? 'text-luxury-gold' : 'text-luxury-graphite/40 hover:text-luxury-graphite'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {showroomData[activeCategory].map((img, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`${activeCategory} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg"
              alt="Visualização ampliada"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showroom;
