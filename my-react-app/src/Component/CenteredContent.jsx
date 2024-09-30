import React from 'react';
import Banner from './Banner';
import FundraiserCard from './FundraiserCard';
import ButtonCenter from './ButtonCenter';
import JumatBerkah from './JumatBerkah';
import NewsSlider from './NewsSlider';
import NewsSlider2 from './NewsSlider2';
import PilihKategori from './PilihKategori';
import Rekomendasi from './Rekomendasi';
import HomePage from './HomePage';
import KartuDonasi from './KartuDonasi';



const App = () => {
  return (
    <div>
      <Banner />
      <FundraiserCard />
      <ButtonCenter />
      <JumatBerkah />
      <KartuDonasi/>
      <NewsSlider/>
      <NewsSlider2/>
      <PilihKategori/>
      <Rekomendasi/>
      <HomePage/>
      
    </div>
  );
};

export default App;