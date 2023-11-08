import api, { fakeData } from "@/services/api";
import SpeciesMapper from "@/utils/speciesMapper";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

interface Props {
  children: ReactNode;
}

export interface ISpecies {
  name: string;
  known_names: string;
  scientific_name: string;
  family: string;
  food?: string;
  order?: string;
  habits?: string;
  division: string;
  curiosities: string;
  habitat?: string;
  geographic_distribution: string;
  image_url: string;
  phenology?: string;
  reference: string;
}

export interface ISpeciesResponse {
  id: string;
  specie?: ISpecies;
  coordinates: L.LatLngExpression;
  icon_color: string;
}

interface ILocation {
  latitude: L.LatLngExpression;
  longitude: L.LatLngExpression;
}

interface IPhoto {
  photo_url: string;
}

export interface ISpeciesOnApi {
  id: string;
  apparitions: ILocation[];
  family: string;
  food?: string;
  order?: string;
  geographic_dist: string;
  habitat?: string;
  habits?: string;
  others: string;
  group: number;
  photo_url: IPhoto[];
  popular_name: string;
  reference: string;
  scientific_name: string;
  variables_names: string;
  phenology?: string;
}

interface ISpeciesApiResponse {
  data: {
    plants: ISpeciesOnApi[];
    animals: ISpeciesOnApi[];
  };
}

interface ISpeciesProviderData {
  initialData: ISpeciesResponse[];
  setInitialData: Dispatch<SetStateAction<ISpeciesResponse[]>>;
  speciesInfo: ISpeciesResponse[];
  setSpeciesInfo: Dispatch<SetStateAction<ISpeciesResponse[]>>;
  specie: ISpecies;
  setSpecie: Dispatch<SetStateAction<ISpecies>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  dataToParse: ISpeciesApiResponse;
}

const SpeciesContext = createContext<ISpeciesProviderData>({} as ISpeciesProviderData);

export function SpeciesProvider({ children }: Props) {
  // const data: ISpeciesResponse[] = [
  //   {
  //     id: "iafgjopaifjkopwgkwoa",
  //     coordinates: [-23.106674, -50.361061],
  //     icon_color: "#b91c1c"
  //   },
  //   {
  //     id: "iafgjopaifjkopwgkwod",
  //     coordinates: [-23.107699, -50.360574],
  //     icon_color: "#15803d"
  //   },
  //   {
  //     id: "iafgjopaifjkopwgkwoz",
  //     coordinates: [-23.1107, -50.360671],
  //     icon_color: "#15803d"
  //   },
  //   {
  //     id: "4bd545c7-26eb-4e0a-8c01-374cf2e4d19d",
  //     coordinates: [-22.89343333333333, -49.64843333333333],
  //     icon_color: "#b91c1c",
  //     specie: {
  //       family: "Threskiornithidae",
  //       food: "Tem alimentação variada, composta por artrópodes entre outros invertebrados.",
  //       geographic_distribution:
  //         "Presente em grande parte do Brasil, também no Paraguai, norte de Argentina, norte de Uruguai e parte da Bolívia. ",
  //       habitat: "Habita campos secos, alagados e pastagens.",
  //       habits:
  //         "Vive geralmente em bandos pequenos ou solitária, procurando alimento, é diurna e crepuscular. Anda em pequenos grupos, que à noite se empoleiram nas árvores. Gosta de planar a grandes alturas.",
  //       order: "Pelecaniformes",
  //       curiosities:
  //         "Seu bico é longo e curvo, adaptado para extrair larvas de besouros e outros insetos da terra fofa.",
  //       image_url:
  //         "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FCuricaca1.png?alt=media&token=d0adc3a9-96f0-4072-b8b8-c806f31951f1",
  //       name: "Curicaca",
  //       known_names: "**",
  //       scientific_name: "Theristicus caudatus",
  //       division: "Invertebrado",
  //       reference:
  //         "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
  //     }
  //   },
  //   {
  //     id: "iafgjopaifjkopwgkwot",
  //     coordinates: [-23.105857, -50.360939],
  //     icon_color: "#1d4ed8",
  //     specie: {
  //       name: "Perereca-Cabrinha",
  //       known_names: "Perereca",
  //       scientific_name: "Boana albopunctata",
  //       family: "Hylidae",
  //       food: "Consomem principalmente aracnídeos e insetos, como por exemplo borboletas e besouros.",
  //       order: "Anura",
  //       habits: "Noturno",
  //       division: "Vertebrado",
  //       curiosities:
  //         "Essa espécie se diferencia por apresentar pequenas arredondas amareladas no região posterior da coxa.",
  //       habitat:
  //         "A espécie se adapta bem a ambientes antrópicos, podem ser vistos sobre o solo, lages emersas e pedras marginais ou parcialmente ocultos sobre a vegetação herbácea e arbustiva ao longo das margens de riachos permanentes ou temporários com fundo pedregoso ou arenoso, brejos ou poças permanentes.",
  //       geographic_distribution:
  //         "Amplamente distribuída na América do Sul, ocorrendo no nordeste da Argentina, norte do Uruguai, leste da Bolívia e leste do Paraguai.",
  //       image_url:
  //         "https://res.cloudinary.com/dcymst6jv/image/upload/v1687228017/im8w3g3wx8sgbvr1scoi.jpg",
  //       reference: "tyedsy"
  //     }
  //   },
  //   {
  //     id: "iafgjopaifjkopwgkwop",
  //     coordinates: [-22.89222222222222, -49.64055555555555],
  //     icon_color: "#1d4ed8"
  //   },
  //   {
  //     id: "iafgjopaifjkopwgkwop",
  //     coordinates: [-22.89232222222222, -49.64065555555555],
  //     icon_color: "#1d4ed8"
  //   }
  // ];

  const [loading, setLoading] = useState(true);
  const [dataToParse, setDataToParse] = useState<ISpeciesApiResponse>({} as ISpeciesApiResponse);
  const [initialData, setInitialData] = useState<ISpeciesResponse[]>([]);
  const [speciesInfo, setSpeciesInfo] = useState<ISpeciesResponse[]>(initialData);
  const [specie, setSpecie] = useState<ISpecies>({} as ISpecies);

  useEffect(() => {
    const datafetch = async () => {
      const response = await api.get<ISpeciesApiResponse>("/biodiversity/");
      console.log("response", response);
      const datas: ISpeciesResponse[] = [];
      response.data.data.animals.map((animal) => {
        if (animal.apparitions.length > 0) {
          return datas.push(SpeciesMapper.parse(animal, true));
        }
      });

      response.data.data.plants.map((plant) => {
        if (plant.apparitions.length > 0) {
          return datas.push(SpeciesMapper.parse(plant, false));
        }
      });

      setInitialData(datas);
      setSpeciesInfo(datas);
      setLoading(false);
    };

    datafetch();
  }, []);

  return (
    <SpeciesContext.Provider
      value={{
        speciesInfo,
        setSpeciesInfo,
        initialData,
        setInitialData,
        setSpecie,
        specie,
        loading,
        setLoading,
        dataToParse
      }}>
      {children}
    </SpeciesContext.Provider>
  );
}

export const useSpecies = () => useContext(SpeciesContext);
