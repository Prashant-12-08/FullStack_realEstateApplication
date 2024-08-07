import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

import style from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import MapMarker from './MapMarker';

function Map({ items }) {
  return (
    <MapContainer
      // center={[20.5937, 78.9629]}
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [36.2456460176, -86.3763033876]
      }
      zoom={3}
      scrollWheelZoom={true}
      className={style.map}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />

      {/* <Marker position={[51.504, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      {items.map((item, i) => (
        <MapMarker key={i} item={item} />
      ))}
    </MapContainer>
  );
}

export default Map;
