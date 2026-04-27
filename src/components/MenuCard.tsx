'use client';
import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

interface MenuItem {
  name: string;
  icon?: string;
}

interface MenuSection {
  title: string;
  icon: string;
  items: MenuItem[];
}

const MenuCard = () => {
  const menuSections: MenuSection[] = [
    {
      title: 'STARTERS (VEG)',
      icon: '🥗',
      items: [
        { name: 'Green Salad' },
        { name: 'Veg Roll' },
        { name: 'Veg Bullet' },
        { name: 'Veg Manchuria' },
        { name: 'Baby Corn Manchuria' },
      ],
    },
    {
      title: 'STARTERS (NON-VEG)',
      icon: '🍗',
      items: [
        { name: 'Chicken 65' },
        { name: 'Chilli Chicken' },
        { name: 'Chicken Manchuria' },
        { name: 'Chicken 65 (Dry)' },
        { name: 'Chicken Pakora' },
        { name: 'Egg Manchuria' },
        { name: 'Egg Roast' },
        { name: 'Apollo Fish' },
        { name: 'Royyala (Prawns Fry)' },
      ],
    },
    {
      title: 'BIRYANI / RICE ITEMS',
      icon: '🍛',
      items: [
        { name: 'Chicken Biryani' },
        { name: 'Mutton Biryani' },
        { name: 'Egg Biryani' },
        { name: 'Veg Biryani' },
        { name: 'Paneer Biryani' },
        { name: 'Mushroom Biryani' },
        { name: 'Cashew (Kaju) Biryani' },
        { name: 'Special Biryani' },
      ],
    },
    {
      title: 'MEALS / MAIN COURSE',
      icon: '🍽️',
      items: [
        { name: 'Meals' },
        { name: 'Chicken Curry' },
        { name: 'Mutton Curry' },
        { name: 'Dal (Pappu)' },
        { name: 'Sambar' },
        { name: 'Rasam' },
        { name: 'Curd' },
      ],
    },
    {
      title: 'NOODLES / FRIED RICE',
      icon: '🍜',
      items: [
        { name: 'Veg Noodles' },
        { name: 'Egg Noodles' },
        { name: 'Chicken Noodles' },
        { name: 'Mixed Noodles' },
        { name: 'Veg Fried Rice' },
        { name: 'Egg Fried Rice' },
        { name: 'Chicken Fried Rice' },
        { name: 'Mixed Fried Rice' },
      ],
    },
    {
      title: 'JUICES & DRINKS',
      icon: '🥤',
      items: [
        { name: 'Badam Milk' },
        { name: 'Grape Juice' },
        { name: 'Rose Milk' },
        { name: 'Mixed Fruit Juice' },
        { name: 'Watermelon Juice' },
        { name: 'Fruit Salad' },
        { name: 'Milkshake' },
      ],
    },
    {
      title: 'ICE CREAMS & OTHERS',
      icon: '🍨',
      items: [
        { name: 'Ice Cream (Butterscotch)' },
        { name: 'Ice Cream (Vanilla)' },
        { name: 'Ice Cream (Strawberry)' },
        { name: 'Water Bottle' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-8 px-4 sm:px-6 md:px-8"
      style={{ fontFamily: playfair.style.fontFamily }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 pt-4 sm:pt-6"
        >
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <p className="text-gold-400 text-xs sm:text-sm tracking-widest uppercase font-light">
              🏢 Welcome to
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight">
              SLV
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base tracking-widest text-gray-300">
              <span>BANQUET HALLS</span>
              <span className="hidden sm:inline">•</span>
              <span>CATERING</span>
            </div>
          </div>
        </motion.div>

        {/* Menu Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wider">
            📜 MENU
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mt-3 sm:mt-4"></div>
        </motion.div>

        {/* Menu Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 sm:space-y-12 md:space-y-14 mb-8 sm:mb-12"
        >
          {menuSections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 rounded-lg sm:rounded-xl backdrop-blur-sm border border-neutral-700/50 hover:border-yellow-600/30 transition-all duration-300 p-5 sm:p-6 md:p-8">
                {/* Section Header */}
                <div className="mb-4 sm:mb-5 md:mb-6 flex items-center gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl">{section.icon}</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-widest">
                    {section.title}
                  </h3>
                </div>

                {/* Menu Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      whileHover={{ x: 8 }}
                      className="text-yellow-500 text-sm sm:text-base md:text-lg hover:text-yellow-300 transition-colors duration-200 py-1 sm:py-2"
                    >
                      <span className="text-yellow-400 mr-2">✓</span>
                      {item.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center my-12 sm:my-16"
        >
          <p className="text-yellow-500 text-xs sm:text-sm tracking-widest mb-2">✨ TAGLINE ✨</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Delicious Food
          </h3>
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl">Perfect Moments</p>
        </motion.div>

        {/* Contact & Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-neutral-800/60 to-neutral-900/60 rounded-lg sm:rounded-xl backdrop-blur-sm border border-neutral-700/50 p-6 sm:p-8 md:p-10 text-center"
        >
          <p className="text-yellow-500 text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">
            📞 FOR BOOKING & ENQUIRIES
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 tracking-wider">
            +91 90523 41300
          </p>

          <div className="border-t border-neutral-700/50 py-6 sm:py-8 mb-0">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-3">
              📍 Address
            </p>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              Falcon One Shopping Plaza,<br />
              Kistareddypet, Berrumguda
            </p>
          </div>

          <div className="border-t border-neutral-700/50 pt-6 sm:pt-8">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
              Quality Food • Great Service
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 font-light">
              <span>WEDDINGS</span>
              <span>•</span>
              <span>PARTIES</span>
              <span>•</span>
              <span>EVENTS</span>
              <span>•</span>
              <span>CORPORATE EVENTS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
