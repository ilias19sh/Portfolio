import { motion } from 'framer-motion';

const SectionTransition = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition; 