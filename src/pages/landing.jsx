import React from 'react'
import { useDataContext } from '../components/context/context'
import ProductCard from '../components/productCard/productCard';

function LandingPage() {
    const {dataState}= useDataContext()
  return (
    <div>
      <h3>home</h3>
      <input type="text" />
      <ProductCard/>
    </div>
  );
}

export default LandingPage