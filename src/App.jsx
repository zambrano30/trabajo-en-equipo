
import {Header  } from "./components/Header";
import ImageGallery  from "./components/ImageGallery";
import CountrySearchBar from "./components/CountrySearchBar";
function App() {
 
  return (
    <>
      <Header/>
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
       El mejor restaurante donde ofrecemos comidas  de todo tipo y variedad  de paises animate aprobar una nueva cultura
    </p>
  </div>
</div>
<ImageGallery/>
<CountrySearchBar/>
    </>
    
  );
}

export default App;

/* npm install lucide-react */