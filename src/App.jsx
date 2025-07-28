import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import HeroComponent from "./components/heroComponent";
import NavbarComponent from "./components/NavbarComponent";
import QuestionComponent from "./components/QuestionComponent";
import TeachersComponent from "./components/TeachersComponent";
import TestimonialsComponent from "./components/TestimonialsComponent";
import ValuesComponent from "./components/ValuesComponent";

function App() {
  return (
    <>
      <main>
        <div className="bg-[#FFF5F1] mt-[32px] mx-[32px] mb-[100px] rounded-[40px]">
          <NavbarComponent />
          <HeroComponent />
        </div>

        <ValuesComponent />
        <TeachersComponent />
        <TestimonialsComponent />
        <QuestionComponent />
        <ContactComponent />
        <FooterComponent />
      </main>
    </>
  );
}

export default App;
