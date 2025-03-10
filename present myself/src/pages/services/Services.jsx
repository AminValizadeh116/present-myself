import styled from './services.module.css'
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import Footer from '../../components/footer/Footer';

function Services() {
  const [services, setServices] = useState(null);
  const [status, setStatus] = useState("All");
  useEffect(() => {
    axios("http://localhost:8000/posts").then((result) =>
      setServices(result.data)
    );
  }, []);

  return (
    <div className={`${styled.contents} min-h-lvh`}>
      <Header />
      <div className="flex justify-center mb-10">
        <div className="w-4xl">
          <div className="flex justify-between my-10">
            <button
              onClick={() => setStatus("All")}
              className="border rounded-2xl border-amber-600 text-white px-15 py-2 cursor-pointer hover:font-bold"
            >
              all
            </button>
            <button
              onClick={() => setStatus("marketing")}
              className="border rounded-2xl border-amber-600 text-white px-15 py-2 cursor-pointer hover:font-bold"
            >
              marketing
            </button>
            <button
              onClick={() => setStatus("design")}
              className="border rounded-2xl border-amber-600 text-white px-15 py-2 cursor-pointer hover:font-bold"
            >
              design
            </button>
            <button
              onClick={() => setStatus("develop")}
              className="border rounded-2xl border-amber-600 text-white px-15 py-2 cursor-pointer hover:font-bold"
            >
              development
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className=" grid gap-5 grid-cols-12 pb-10">
              {services ? (
                status == "All" ? (
                  services.map((service) => (
                    <div className="col-span-4 ">
                      <img
                        className="h-50 w-100 rounded-2xl"
                        src={service.image}
                        alt=""
                      />
                    </div>
                  ))
                ) : (
                  services
                    .filter((item) => item.category == status)
                    .map((service) => (
                      <div className="col-span-4 ">
                        <img
                          className="h-50 w-100 rounded-2xl"
                          src={service.image}
                          alt=""
                        />
                      </div>
                    ))
                )
              ) : (
                <h1>waiting</h1>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
