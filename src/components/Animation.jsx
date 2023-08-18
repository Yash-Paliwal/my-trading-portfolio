import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 8px;
  background-color: #000;
`;

const Animation = () => {
  return (
    <AnimationWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Your animation content here */}
        <h1>Welcome to My Trading Portfolio</h1>
        <p>Start your trading journey with us!</p>
      </motion.div>
    </AnimationWrapper>
  );
};

export default Animation;
