import { useEffect, useState, useRef } from 'react';
import { Package } from 'lucide-react';

export default function HygieneSection() {
  const bgImage = 'https://t3.ftcdn.net/jpg/17/67/72/26/240_F_1767722689_mGIEdIMCqYNOy1tupqiMc7UU0MnSECcP.jpg?auto=compress&cs=tinysrgb&w=1200';

  const points = [
    { label: 'Quality Ingredients', value: 95 },
    { label: 'Customer Satisfaction', value: 98 },
    { label: 'Eco-Friendly', value: 90 },
    { label: 'Hygiene Assurance', value: 100 },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [percentages, setPercentages] = useState(points.map(() => 0));

  // Scroll listener to detect when section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const topShown = rect.top < window.innerHeight && rect.bottom >= 0;
      if (topShown) setVisible(true);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate numbers when visible
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setPercentages((prev) =>
        prev.map((p, i) => {
          if (p < points[i].value) return p + 1;
          return p;
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Package className="h-12 w-12 text-emerald-400" />
        </div>
        <h2 className="text-4xl font-bold mb-12">Hygiene & Care</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="bg-white/20 rounded-2xl p-6 flex flex-col items-center">
              <span className="text-4xl font-bold">
                {percentages[idx]}<span className="text-lg">%</span>
              </span>
              <p className="mt-2 text-center">{point.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
