import HeroComponent from "./components/heroComponent";
import NavbarComponent from "./components/NavbarComponent";
import TeachersComponent from "./components/TeachersComponent";
import TestimonialsComponent from "./components/TestimonialsComponent";
import ValuseComponent from "./components/ValuseComponent";

function App() {
  return (
    <>
      <div>
        <div className="bg-[#FFF5F1] mt-[32px] mx-[32px] mb-[100px] rounded-[40px]">
          <NavbarComponent />
          <HeroComponent />
        </div>

        <ValuseComponent />
        <TeachersComponent />
        <TestimonialsComponent />
      </div>
    </>
  );
}

export default App;
