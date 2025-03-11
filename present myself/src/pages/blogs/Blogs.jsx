import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styled from "./blogs.module.css";
import calenderIcon from "../../assets/icons-calendar.png";
import locationIcon from "../../assets/icons-location.png";
import phoneIcon from "../../assets/icons-phone2.png";
import LocationViwer from "../../components/lacationviwer/locationViwer";

function Location() {
  return (
    <>
      <Header />
      <div className="min-h-lvh bg-neutral-400">
        <div className="grid grid-cols-12 gap-10 p-10 text-white">
          <div className="bg-gray-700 shadow-2xl col-start-2 col-span-4 p-5 rounded-lg">
            <div className="flex items-center gap-4 pb-8">
              <div className="bg-white rounded-full p-2">
              <img src={calenderIcon} alt="calenderIcon" width='35px'/>
              </div>
              <p>
                <b>every day</b> we are responsive from <b>10:00 - 21:30</b>
              </p>
            </div>

            <div className="flex items-center gap-4 pb-8">
            <div className="bg-white rounded-full p-2">
              <img src={phoneIcon} alt="phoneIcon" width='35px'/>
            </div>
              
              <div>
                <p>
                  <b>cellphone:</b> 09371165950
                </p>
                <p>
                  <b>company:</b> 081383367411
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pb-8">
            <div className="bg-white rounded-full p-2">
              <img src={locationIcon} alt="locationIcon" width='30px'/>
            </div>
              
              <p>
                <b>city:</b> Hamedan- <b>streat:</b> zamani st.
              </p>
            </div>
          </div>

          <div className="col-span-5  rounded-lg shadow-2xl">
            <LocationViwer />
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
}

export default Location;
