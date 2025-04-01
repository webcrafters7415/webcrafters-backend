// agency-website/client/src/components/Preloader.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading
  }, []);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ display: loading ? 'flex' : 'none' }}
    >
      <motion.div
        className="loader"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
};

export default Preloader;