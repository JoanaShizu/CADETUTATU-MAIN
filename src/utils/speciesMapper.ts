import { ISpeciesOnApi, ISpeciesResponse } from "@/contexts/dataContext";

class SpeciesMapper {
  static parse(data: ISpeciesOnApi, isAnimal: boolean): ISpeciesResponse {
    let color = "";
    let division = "";
    data.group === 1
      ? ((color = "#1d4ed8"), (division = "Vertebrado"))
      : data.group === 2
      ? ((color = "#b91c1c"), (division = "Invertebrado"))
      : ((color = "#15803d"), (division = "Plantas"));

    if (isAnimal) {
      return {
        id: data.id,
        coordinates: [Number(data.apparitions[0].latitude), Number(data.apparitions[0].longitude)],
        icon_color: color,
        specie: {
          family: data.family,
          food: data.food!,
          geographic_distribution: data.geographic_dist,
          habitat: data.habitat!,
          habits: data.habits!,
          order: data.order!,
          curiosities: data.others,
          image_url: data.photo_url[0].photo_url,
          name: data.popular_name,
          known_names: data.variables_names,
          scientific_name: data.scientific_name,
          division,
          reference: data.reference
        }
      };
    }

    return {
      id: data.id,
      coordinates: [Number(data.apparitions[0].latitude), Number(data.apparitions[0].longitude)],
      icon_color: color,
      specie: {
        division,
        family: data.family,
        curiosities: data.others,
        image_url: data.photo_url[0].photo_url,
        name: data.popular_name,
        known_names: data.variables_names,
        scientific_name: data.scientific_name,
        geographic_distribution: data.geographic_dist,
        phenology: data.phenology!,
        reference: data.reference
      }
    };
  }
}

export default SpeciesMapper;
