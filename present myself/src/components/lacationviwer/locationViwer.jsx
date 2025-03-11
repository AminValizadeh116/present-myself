import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// import "./locationViewer.css";

function locationViwer() {
  // const mapRef = useRef();
  return (
    <div className="flex justify-center items-center h-1/1">
      <iframe
      className="rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.875873939678!2d48.506140575594614!3d34.8090645728813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff1933278b05d77%3A0x98eadda7ce3b9a0c!2sTomb%20of%20Baba%20Taher!5e0!3m2!1sen!2s!4v1741672874429!5m2!1sen!2s"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default locationViwer;

{
  /* <MapContainer
        center={{ lat: 34.7983, lng: 48.5148 }}
        zoom={10}
        scrollWheelZoom={true}
        ref={mapRef}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=nJIFBEZdnI5TtgtHBKx1"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
      </MapContainer> */
}
