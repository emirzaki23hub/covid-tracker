import React from "react";
import "./Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataonMap } from "./util";

function Map({ countries, index, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap  center={center} zoom={zoom}>
        <TileLayer key={index}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataonMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
