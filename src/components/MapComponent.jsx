// src/MapComponent.js
import React from "react";
import L from "leaflet";
import { FaRegBuilding } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup,Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";
import { FeatureGroup } from "react-leaflet";
import Build from "../assets/logo/build.png"
import data from "../tabs/data"


function MapComponent() {
	const customIcon = new L.Icon({
		iconUrl: Build,
		iconSize: [32, 32], // İkon boyutları
		iconAnchor: [0, 0], // İkonun ankraj noktası
		popupAnchor: [0, -32], // Açılır pencere konumu
	  });
  const _onEdited = (e) => {
    let numEdited = 0;
    e.layers.eachLayer((layer) => {
      numEdited += 1;
    });
    console.log(`_onEdited: edited ${numEdited} layers`, e);
  };
  const _onCreated = (e) => {
    let type = e.layerType;
    let layer = e.layer;
    if (type === "marker") {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
    } else {
      console.log("_onCreated: something else created:", type, e);
    }
  };

  const _onDeleted = (e) => {
    let numDeleted = 0;
    e.layers.eachLayer((layer) => {
      numDeleted += 1;
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);
  };

  const _onMounted = (drawControl) => {
    console.log("_onMounted", drawControl);
  };

  const _onEditStart = (e) => {
    console.log("_onEditStart", e);
  };

  const _onEditStop = (e) => {
    console.log("_onEditStop", e);
  };

  const _onDeleteStart = (e) => {
    console.log("_onDeleteStart", e);
  };

  const _onDeleteStop = (e) => {
    console.log("_onDeleteStop", e);
  };

  const _onDrawStart = (e) => {
    console.log("_onDrawStart", e);
  };
  const markerIcon = new L.Icon({
    iconUrl: require("../assets/logo/station.png"),
    iconSize: [40, 40],
    iconAnchor: [0, 0], //[left/right, top/bottom]
    popupAnchor: [0, 0], //[left/right, top/bottom]
  });
  delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});
  return (
    <div className="border-slate-400 border-2 shadow-lg">
      <MapContainer
        center={[39.794226, 32.843034]}
        zoom={9.5}
        style={{width:"100%"}}
      >
        <FeatureGroup>
          <EditControl
            onDrawStart={_onDrawStart}
            position="topright"
            onEdited={_onEdited}
            onCreated={_onCreated}
            onDeleted={_onDeleted}
            draw={{
              polyline: false, // Özelleştirilmiş ikon kullanmak için bu değeri false yapın
              rectangle: true,
              circlemarker: true,
              circle: true,
              polygon: true,
            }}
          />
        </FeatureGroup>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
		<Polygon
    positions={[
		[39.950772902504944, 32.77151778827364],
		[39.948050016570974, 32.771957802450814],
		[39.94871635214818, 32.774104213071176],
		[39.951036136487, 32.77367493094713]
	  ]}
    color="blue" // Çizgi rengi
    fillColor="red" // İç dolgu rengi
    fillOpacity={0.4} // İç dolgu opaklığı
  >
    <Popup>
      Dikdörtgenin içeriği burada olabilir.
    </Popup>
  </Polygon>
  {data.map((city, idx) => (
              <Marker
                position={[city.lat, city.lng]}
                icon={markerIcon}
                key={idx}
              >
                <Popup>
                  <b>
                    {city.city}, {city.country}
                  </b>
                </Popup>
              </Marker>
            ))}
  
		<Marker position={[39.950772902504944, 32.77151778827364]} icon={customIcon} >
      <Popup>
        Açıklama veya içerik burada olabilir.
      </Popup>
    </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
