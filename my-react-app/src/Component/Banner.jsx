import React from 'react';
import DownloadButtons from './DownloadButtons';
import FundraiserCard from './FundraiserCard';
import SearchBar from './SearchBar';
import bghero from '../Assets/bghero.png';

const Banner = () => {
  const styles = {
    bannerContainer: {
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60hv',
    
      
    },
    bannerContent: {
      backgroundColor: '#3ea8ef',
      borderRadius: '15px',
      maxWidth: '500px',
      height:'50hv',
      width: '70%',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    bannerTextH1: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#ffffff'
    },
    bannerTextP: {
      fontSize: '16px',
      color: '#ffffff',
      marginTop: '10px'
    },
    bannerImage: {
    width: '100%',
    height:'auto' , 
    objectfit:'cover',
    borderradius: '12px',
    },
    bannerButtons: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    mobileButton: {
      marginBottom: '5px',
      width: '50%'
    }
  };

  return (
    
      <div style={styles.bannerContainer}>
      <div style={styles.bannerContent}>
        <SearchBar />
        <div style={styles.bannerText}>
          <h1 style={styles.bannerTextH1}>Saling Jaga Se-Indonesia ID</h1>
          <p style={styles.bannerTextP}>Bantu Sesama, Dibantu Bersama</p>
          <p style={styles.bannerTextP}>Donasi, zakat, dan lindungi keluarga bersama jutaan orang baik melalui aplikasi Kitabisa</p>
        </div>
        <br />
      <DownloadButtons />
        <div className="bannerImage">
          <img src={bghero} alt="Banner Image" fetchPriority='high' style={styles.bannerImage} />
        </div>
      </div>
    </div>
   
  );
};

export default Banner;
