import React from 'react';

const OurPartners = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        
        <div className="bg-white p-6 cursor-pointer rounded-3xl shadow-lg w-full max-w-sm transition-transform transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <img
              src="https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold">Cristiano Ronaldo</h3>
              
            </div>
          </div>
          <p className="text-base mb-4 text-[#17212199]">“Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. ”</p>
        </div>

        <div className="bg-white cursor-pointer p-6 rounded-3xl shadow-lg w-full max-w-sm transition-transform transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <img
              src="https://b.fssta.com/uploads/application/soccer/headshots/711.vresize.350.350.medium.24.png"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold">Lionel Messi</h3>
              
            </div>
          </div>
          <p className="text-base mb-4 text-[#17212199]">“Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team.”</p>
        </div>

        <div className="bg-white cursor-pointer p-6 rounded-3xl shadow-lg w-full max-w-sm transition-transform transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <img
              src="https://s.hs-data.com/bilder/spieler/gross/142105.jpg"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold">Neymar Junior</h3>
              
            </div>
          </div>
          <p className="text-base mb-4 text-[#17212199]">“Neymar da Silva Santos Júnior also known as Neymar Júnior, is a Brazilian professional footballer who plays as an attacking midfielder for Saudi Pro League club Al Hilal and the Brazil national team. ”</p>
        </div>
        
      </div>
    </div>
  );
};

export default OurPartners;