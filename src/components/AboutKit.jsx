import { Package } from 'lucide-react';
import { motion } from 'framer-motion';
import osquare from '../assets/images/osquare.png';

export default function AboutKit() {
  const kitImage = 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200';

  // Animation variants
  const imageVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const contentVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Package className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Kit</h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl flex justify-center hover:scale-105 transition-transform duration-300"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={osquare}
              alt="O <sup>2</sup> Personal Care Kit"
              className="w-[300px] h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to O <sup>2</sup>, where premium personal care meets convenience. Our complete hygiene kit is meticulously curated to provide you with everything you need for your daily routine. Each product in our collection is carefully selected for its quality, effectiveness, and value.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're traveling, hitting the gym, or looking for a comprehensive personal care solution, the O <sup>2</sup> kit delivers luxury and functionality in one elegant package. We believe that taking care of yourself shouldn't be complicated—our kit simplifies your routine while maintaining the highest standards of quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience the perfect blend of convenience, quality, and care with products specifically chosen to enhance your daily hygiene and wellness.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
