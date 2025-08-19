
import {Header  } from "./components/Header";
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
    </>
    
  );
}

export default App;
