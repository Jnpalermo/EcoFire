import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as fireData from "./data/fireData.json";
import "./App.css";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.1258,
    longitude: -119.3193,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  const [selectedFire, setSelectedFire] = useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoieXVuZ2JhZSIsImEiOiJja2YwNGxibGcxZWt0MnlwOXhqazBweTB1In0.Krl5dpCJouPQuG-1d8FwvA"
        mapStyle="mapbox://styles/yungbae/ckf05h4i82fny1bo6qt37xd2w"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {fireData.data.fires.map((fire) => (
          <Marker
            key={fire.confidence}
            latitude={fire.position.lat}
            longitude={fire.position.lon}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                debugger;
                setSelectedFire(fire);
              }}
            >
              <img src="/flame.svg" alt="flame icon "></img>
            </button>
            <div>FIRE</div>
          </Marker>
        ))}
        {selectedFire ? (
          <Popup
            latitude={selectedFire.position.lat}
            longitude={selectedFire.position.lon}
            onClose={() => {
              debugger;
              setSelectedFire(null);
            }}
          >
            <div>
              <h2>{selectedFire.details.status}</h2>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
