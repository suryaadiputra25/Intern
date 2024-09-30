import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSlider = () => {
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
      <h2 className="text-xl font-bold mb-4">Program Spesial Kitabisa</h2>
      <Slider {...settings}>
        {/* Card 1 */}
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                74 hari lagi
              </span>
              <img
                src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F63b0fdf9-cd78-42bd-8e27-97c6c0e4ac74.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75" // Replace with your image URL
                alt="Bantu Renovasi Masjid di Pelosok Aceh"
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h1 className="text-sm">Nova Eliza</h1>
              <h3 className="font-bold text-sm">
                Bantu Renovasi Masjid di Pelosok Aceh
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
              
              <img
                src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F8b2d8f51-8ef4-44c5-8cc8-2bb4a340e617.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75" // Replace with your image URL
                alt="Sedekah Wujudkan Mimpi Santri Qur’an Pondok IT"
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
            <h1 className="text-sm">Pondok IT</h1>
              <h3 className="font-bold text-sm">
                Sedekah Wujudkan Mimpi Santri Qur’an Pondok IT
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
             
              <img
                src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F3b7a717a-8094-4e91-9f48-f0be234889d3.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75" // Replace with your image URL
                alt="Sedekah Bantu Warga Dhuafa Khusyuk Ibadah"
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
            <h1 className="text-sm">Kitasobi</h1>
              <h3 className="font-bold text-sm">
                Sedekah Bantu Warga Dhuafa Khusyuk Ibadah
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

export default NewsSlider;
