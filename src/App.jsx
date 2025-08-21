import ImageGallery from "./components/ImageGallery";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Sobre from "./pages/SobreNosotro";

function App() {
  return (

    <Routes>
  
      <Route element={<MainLayout />}>
      
        <Route
          path="/"
          element={
            <>
              <section className="relative w-full h-[600px] mt-16">
                <div
                  className="absolute inset-0 bg-cover bg-center w-full"
                  style={{ backgroundImage: "url('/comida.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                  <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold">
                    Bienvenido
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-3xl">
                    El Oasis de las mejores platillos
                  </p>
                </div>
              </section>

              <div className="bg-white hidden lg:block relative -mt-40 mx-auto max-w-4xl w-[90%] p-8 rounded-2xl shadow">
                <h2 className="text-center text-2xl md:text-4xl font-bold uppercase">
                  Restaurantes de alta cocina con muchos estilos
                </h2>
                <div className="mt-6 text-center max-w-2xl mx-auto">
                  <p>
                    El mejor restaurante donde ofrecemos comidas de todo tipo y
                    variedad de países, ¡anímate a probar una nueva cultura!
                  </p>
                </div>
              </div>

              <ImageGallery />
            </>
          }

          
        />

        <Route path="/menu" element={<h1>Login</h1>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contacto" element={<h1>Servicios</h1>} />
      </Route>
    </Routes>

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
