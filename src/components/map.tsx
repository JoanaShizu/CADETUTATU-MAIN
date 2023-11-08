import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "./svgIcon";
import ReactDOMServer from "react-dom/server";
import { ISpeciesResponse, useSpecies } from "@/contexts/dataContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import SpeciesMapper from "@/utils/speciesMapper";

const Map = () => {
  const { speciesInfo, loading } = useSpecies();
  useEffect(() => {
    setFilteredSpecies(speciesInfo);
  }, [speciesInfo]);
  const [filteredSpecies, setFilteredSpecies] = useState<ISpeciesResponse[]>([]);

  console.log(filteredSpecies);

  return loading ? (
    <h1>carregando</h1>
  ) : (
    <MapContainer
      style={{
        height: "93vh"
      }}
      center={[-23.107719, -50.359567]}
      zoom={15}
      className="z-30"
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        subdomains={["a", "b", "c"]}
      />
      {filteredSpecies.map((specie, index) => {
        return (
          <Marker
            key={index}
            position={specie.coordinates}
            icon={L.divIcon({
              className: "mymarker",
              html: ReactDOMServer.renderToString(<Icon colorIcon={specie.icon_color} />)
            })}>
            <Popup>
              {specie.specie ? (
                <Link href={`/${specie.id}`} className="text-base">
                  {specie.specie.name}
                </Link>
              ) : (
                <Link href={`/`} className="text-base">
                  Ver detalhes
                </Link>
              )}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
