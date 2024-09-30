import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JumatBerkah = () => {
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
      <h2 className="text-xl font-bold mb-4">Pilihan Jumat Berkah</h2>
      <Slider {...settings}>
        {/* Card 1 */}
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="relative">
             
              <img
                src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F11b78112-ae8b-4c95-be6e-75e3cce8de57.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75" // Replace with your image URL
                alt="Bantu Renovasi Masjid di Pelosok Aceh"
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h1 className="text-sm">Baitul Maal Itqan
              </h1>
              <h3 className="font-bold text-sm">
              SUMBER PAHALA: Sedekah Bangun Masjid Pasca-Bencana
              Baitul Maal Itqan
              </h3>
              <p className="text-sm text-gray-600">Tersedia:  Rp56.544.580</p>
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
                34 hari lagi
              </span>
              <img
                src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F75c44db4-3ca1-4699-aa60-3585187bac97.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75" // Replace with your image URL
                alt="Sedekah Wujudkan Mimpi Santri Qur’an Pondok IT"
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
            <h1 className="text-sm">Penderma.id</h1>
              <h3 className="font-bold text-sm">
              SEDEKAH JUMAT Sisihkan Rezeki Berbagi 1000 Qur'an
              </h3>
              <p className="text-sm text-gray-600">Tersedia: Rp27.729.712</p>
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
             
              <img
                src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F1fbe1870-bb37-46a3-b9da-036e8b447913.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75" // Replace with your image URL
                alt="Sedekah Bantu Warga Dhuafa Khusyuk Ibadah"
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
            <h1 className="text-sm">Jagabersama</h1>
              <h3 className="font-bold text-sm">
              JUMAT BERKAH! Berbagi Makanan tuk Saudara Dhuafa
              </h3>
              <p className="text-sm text-gray-600">Tersedia: Rp42.699.166</p>
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

export default JumatBerkah;
