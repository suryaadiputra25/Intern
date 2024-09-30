import React from 'react';

const Rekomendasi = () => {
  const newsList = [
    {
      title: 'Solidaritas Bantu Korban Banjir Bandang Ternate!',
      organization: 'Jagabersama',
      totalCollected: 'Rp128.660.866',
      daysLeft: 3,
      progress: 70, // Progres 70%
      imageUrl: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F1e92a184-ee77-4bad-9aa3-d9ed0dc1b031.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
    },
    {
      title: 'URGENT! Asap Tebal Kebakaran Hutan Kepung Kalbar!',
      organization: 'BAZNAS Hub',
      totalCollected: 'Rp327.754.871',
      daysLeft: 95,
      progress: 45, // Progres 45%
      imageUrl: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F76fb9c38-0999-414c-a382-eb0f40ba6db0.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75',
    },
    {
      title: '5 Tahun Tanpa Masjid, 164 Warga Ibadah di Lapangan',
      organization: 'Masjid Nusantara',
      totalCollected: 'Rp1.118.162.058',
      daysLeft: 14,
      progress: 85, // Progres 85%
      imageUrl: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fb3303ca8-0ca2-4f61-b730-97c4f8ef2041.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75',
    },
  ];

  return (
    <div className="bg-sky-200 p-6 rounded-lg max-w-xl mx-auto">
      {/* Label Rekomendasi */}
      <div className="bg-red-500 text-white text-xs py-1 px-2 rounded w-max mb-4">
        REKOMENDASI
      </div>

      {/* Render setiap berita */}
      {newsList.map((news, index) => (
        <div key={index} className="flex items-center mb-2 p-4 rounded-lg shadow-md">
          {/* Gambar dengan ukuran lebih besar */}
          <img src={news.imageUrl} alt="News" className="w-44 h-34 object-cover rounded-md mr-4" />
          
          {/* Teks berita */}
          <div className="flex-1">
            <h2 className="text-sm font-bold mb-2">{news.title}</h2>
            <p className="text-sm text-gray-700 mb-1">{news.organization}</p>
            <div className="bg-gray-200 h-2 rounded mt-1">
              <div
                className="bg-blue-600 h-2 rounded"
                style={{ width: `${news.progress}%` }} // Mengatur lebar progress bar berdasarkan data
              ></div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-gray-600">Terkumpul</p>
              <p className="text-sm font-bold">{news.totalCollected}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-gray-600">Sisa hari</p>
              <p className="text-sm font-bold">{news.daysLeft}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Tombol Lihat Semua */}
      <div className="text-center mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Lihat semua
        </button>
      </div>
    </div>
  );
};

export default Rekomendasi;
