// pages/index.tsx
import React from 'react';
import { DecisionFramework } from '../src/components/Layout/DecisionFramework';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DecisionFramework />
    </div>
  );
};

export default Home;