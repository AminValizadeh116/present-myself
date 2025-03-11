import { Routes } from "react-router";
import styled from "./home.module.css";
import Header from "../../components/header/Header";
import { useTypewriter } from "react-simple-typewriter";
import Footer from "../../components/footer/Footer";
import Comments from "../../components/comments/Comments";

function Home() {
  const [owners] = useTypewriter({
    words: ["Amin",
      "Valizadeh"
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className={`${styled.home} min-h-lvh`}>
      <Header />
      <div className={`flex justify-center ${styled.font}`}>
        <div className="text-center max-w-4xl">
          <h3 className="text-white text-xl"> hello we are</h3>
          <h1 className="text-4xl text-amber-200 font-bold">{owners}</h1>
          <p className="text-white pt-10 text-md">
            We specialize in designing and developing modern, user-friendly
            websites. Using the latest **Front-End** technologies and
            professional design, we create fast, attractive, and fully
            responsive experiences. Our focus is on **UI/UX** innovation, unique
            visual styles, and optimizing websites for top performance. If
            you're looking for a sleek, functional, and trend-driven website,
            we're here to make it happen! 🚀
          </p>
        </div>
      </div>
      <Comments />
      <Footer />
    </div>
  );
}

export default Home;
