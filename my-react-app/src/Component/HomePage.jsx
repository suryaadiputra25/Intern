// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="h-full max-w-xl grid-cols-4 mx-auto p-8">
      {/* First Section */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-gray-50 p-4 rounded-lg shadow mb-6">
        <img src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.kitabisa.com%2Fimages%2Fe9b6da27-48f6-11ef-90bc-1e92bf3a7800_7B18B05FD8E1A670.png&w=256&q=75" alt="Kitabisa App" className="w-34 h-24 mb-4 md:mb-0 md:ml-4"  />
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Tentang Kitabisa</h2>
          <p className="text-gray-600">Pelajari mengenai pengelolaan dan dampak donasi via Kitabisa.</p>
          <a href="#" className="text-blue-500">Baca selengkapnya &gt;</a>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-gray-50 p-4 rounded-lg shadow mb-6">
        <img src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.kitabisa.com%2Fimages%2F0b033d1d-48f7-11ef-97c5-82647294c93a_B7C4A81A4511707E.png&w=256&q=75" alt="Saling Jaga Keluarga" className="w-34 h-24 mb-4 md:mb-0 md:ml-4" />
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">SalingJaga Keluarga</h2>
          <p className="text-gray-600">Siapkan santunan untuk keluarga saat tutup usia.</p>
          <a href="#" className="text-blue-500">Baca selengkapnya &gt;</a>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-gray-50 p-4 rounded-lg shadow mb-6">
        <img src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.kitabisa.com%2Fimages%2F501bad51-48f7-11ef-9137-aa2aabfc71bb_C1F41EB591DDC75.png&w=256&q=75" alt="Kolaborasi Perusahaan dan Brand" className="w-34 h-24 mb-4 md:mb-0 md:ml-4" />
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Kolaborasi Perusahaan dan Brand</h2>
          <p className="text-gray-600">Solusi bagi perusahaanmu membuat dampak berkelanjutan berbasis ESG.</p>
          <a href="#" className="text-blue-500">Baca selengkapnya &gt;</a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-600">
        <p>Beridiri sejak 2013, Kitabisa memiliki izin Pengumpulan Uang dan Barang dari Kemensos. Kitabisa rutin diaudit dengan status Wajar Tanpa Pengecualian (WTP).</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://hugeicons.com/api/png?uuid=youtube-bulk-rounded"><i className="fab fa-facebook text-gray-500"></i></a>
          <a href="#"><i className="fab fa-instagram text-gray-500"></i></a>
          <a href="#"><i className="fab fa-twitter text-gray-500"></i></a>
          <a href="#"><i className="fab fa-youtube text-gray-500"></i></a>
          <a href="#"><i className="fab fa-tiktok text-gray-500"></i></a>
          <a href="#"><i className="fab fa-linkedin text-gray-500"></i></a>
        </div>

        <div className="mt-4">
          <a href="#" className="text-blue-500">Tentang Kitabisa</a> | 
          <a href="#" className="text-blue-500 ml-2">Syarat & Ketentuan</a> | 
          <a href="#" className="text-blue-500 ml-2">Pusat Bantuan</a>
        </div>

        <p className="mt-4">&copy; 2024 Kitabisa. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default HomePage;
