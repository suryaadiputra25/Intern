import React from 'react';

const PilihKategori = () => {
  const deeds = [
    { name: 'Bencana Alam', icon: 'https://assets.kitabisa.cc/images/categories/icon-bencana.svg' },
    { name: 'Balita', icon: 'https://assets.kitabisa.cc/images/categories/icon-balita.svg' },
    { name: 'Bantuan Medis', icon: 'https://assets.kitabisa.cc/images/categories/icon-medis.svg' },
    { name: 'Lainnya', icon: 'https://assets.kitabisa.cc/images/categories/icon-list.svg' },
  ];

  return (
    <div className="container mx-auto ">
      <h2 className="text-xl font-semibold mb-4 text-center">Pilih Kategori Favoritmu</h2>
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {deeds.map((deed) => (
          <div key={deed.name} className="flex flex-col items-center">
            <div className="bg-white-100 rounded-full p-4 mb-2">
            <img src={deed.icon} alt={deed.name} className="w-12 h-12" />
            </div>
            <p className="text-sm font-medium text-center">
              {deed.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PilihKategori;
