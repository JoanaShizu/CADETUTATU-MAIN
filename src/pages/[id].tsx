import Header from "@/components/header";
import Modal from "@/components/modal";
import { ISpecies, useSpecies } from "@/contexts/dataContext";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface SpeciesProps {
  species: ISpecies;
}

const Specie: NextPage<SpeciesProps> = () => {
  const router = useRouter();
  const id = router.query.id;
  const { speciesInfo, specie, setSpecie } = useSpecies();
  if (id) {
    const findSpecie = speciesInfo.find((specie) => specie.id === id);
    console.log(findSpecie, speciesInfo);
    setSpecie(findSpecie!.specie!);
  }

  return (
    <main className="max-h-[100vh] max-w-[100vw]">
      <Header isMap={false} />
      <Modal {...specie!} />
    </main>
  );
};

export default Specie;
