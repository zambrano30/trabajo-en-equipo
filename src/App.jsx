
import {Header  } from "./components/Header";
import ImageGallery  from "./components/ImageGallery";
function App() {
 
  return (
    <>
      <Header/>
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mt-16 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center w-full"
          style={{ backgroundImage: "url('/comida.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold font-serif tracking-wide drop-shadow-lg">
            Bienvenido
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-2xl xl:text-4xl font-light">
            El Oasis de los mejores platillos
          </p>
        </div>
      </section>

      <div className="bg-white relative -mt-32 md:-mt-40 mx-auto max-w-4xl w-[95%] p-6 md:p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-lg md:text-2xl lg:text-4xl font-bold uppercase text-oasis-brown font-serif tracking-wide">
          Restaurantes de alta cocina con muchos estilos
        </h2>
        <div className="mt-4 md:mt-6 text-center max-w-2xl mx-auto">
          <p className="text-gray-700 text-sm md:text-base lg:text-lg font-light">
            El mejor restaurante donde ofrecemos comidas de todo tipo y variedad de países. ¡Anímate a probar una nueva cultura!
          </p>
        </div>
      </div>
      <ImageGallery/>
    </>
    
  );
}

export default App;
