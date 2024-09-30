import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSlider2 = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="p-6 rounded-lg max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Pilihan Kita Bisa</h2>
      <Slider {...settings}>
        {/* Card 1 */}
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                38 hari lagi
              </span>
              <img
                src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F1d8e955e-829b-451c-a37c-2dfadd3f0c63.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75" // Replace with your image URL
                alt="Bantu Renovasi Masjid di Pelosok Aceh"
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
            <h1 className="text-sm">Yayasan Ruang Sejahtera Umat</h1>
              <h3 className="font-bold text-sm">
                Darurat Berobat! Bantu Adik Kecil Berjuang Sembuh
              </h3>
              <p className="text-sm text-gray-600">Terkumpul: Rp17.906.000</p>
              <div className="bg-gray-200 h-2 rounded mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "70%" }}></div>
            </div>
              
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              21 hari lagi
              </span>
              <img
                src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F6c1702a2-283a-4d16-abb2-bd5399f71d65.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75" // Replace with your image URL
                alt="Sedekah Wujudkan Mimpi Santri Qur’an Pondok IT"
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <h1 className="text-sm">Yayasan Cahaya Sedekah</h1>
            <div className="p-4">
              <h3 className="font-bold text-sm">
                Sedekah Subuh  Bantu Difabel Pencari Nafkah
              </h3>
              <p className="text-sm text-gray-600">Tersedia: Rp20.043.406</p>
              <div className="bg-gray-200 h-2 rounded mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "70%" }}></div>
            </div>
             
            </div>
          </div>
        </div>

         {/* Card 3 */}
         <div className="p-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              53 hari lagi
              </span>
              <img
                src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fabb98e84-f729-42e7-b7e7-26596dc94402.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75" // Replace with your image URL
                alt="Sedekah Bantu Warga Dhuafa Khusyuk Ibadah"
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
            <h1 className="text-sm">Yayasan Gugah Nuraini</h1>
              <h3 className="font-bold text-sm">
                Pahala Mengalir Deras, Sedekah Mengalir Untuk Sesama
              </h3>
              <p className="text-sm text-gray-600">Tersedia: Rp31.028.317</p>
              <div className="bg-gray-200 h-2 rounded mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "70%" }}></div>
            </div>
              
            </div>
          </div>
        </div>

        {/* Add more cards as needed */}
      </Slider>
    </div>
  );
};

export default NewsSlider2;
