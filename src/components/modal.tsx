import { ISpecies } from "@/contexts/dataContext";
import Image from "next/image";
import { useRouter } from "next/router";

const Modal = (data: ISpecies) => {
  const router = useRouter();

  return (
    <>
      <div className=" flex items-center justify-center">
        <div className=" w-10/12  sm:w-4/5 md:w-3/5">
          <div>
            <div className="flex items-center justify-center border-b-2 border-neutral-100 border-opacity-100 ">
              <h5 className=" text-2xl sm:text-3xl font-medium my-2 ">{data.name}</h5>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center border-t-2 border-neutral-100 ">
                <Image
                  className="mb-2 mt-2 w-52 h-48 sm:w-96 sm:h-64"
                  width={209}
                  height={186}
                  src={data.image_url}
                  alt="Imagem"
                />
              </div>

              <div className="flex flex-col items-start justify-center">
                <p className="text-base sm:text-lg py-2">
                  <b>Nomes conhecidos: </b>
                  {data.known_names}
                </p>
                <p className="text-base sm:text-lg pb-2">
                  <b>Nome científico: </b>
                  <i>{data.scientific_name}</i>
                </p>
                <p className="text-base sm:text-lg pb-2 text-justify">
                  <b>Família: </b>
                  {data.family}
                </p>
                <p className="text-base sm:text-lg pb-2 text-justify">
                  <b>Alimentação: </b>
                  {data.food}
                </p>
                <p className="text-base sm:text-lg pb-2 text-justify">
                  <b>Ordem: </b>
                  {data.order}
                </p>
                <p className="text-base sm:text-lg pb-2 text-justify">
                  <b>Hábitos: </b>
                  {data.habits}
                </p>
                <p className="text-base sm:text-lg py-2 text-justify">
                  <b>Divisão: </b>
                  {data.division}
                </p>
                <p className="text-base sm:text-lg pb-2 text-justify">
                  <b>Curiosidades: </b>
                  {data.curiosities}
                </p>
                <p className="text-base sm:text-lg pb-2 text-justify">
                  <b>Habitat: </b>
                  {data.habitat}
                </p>
                <p className="text-base sm:text-lg pb-2 text-justify">
                  <b>Distribuição geográfica: </b>
                  {data.geographic_distribution}
                </p>
              </div>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-center rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className=" mt-1 px-2 py-1 sm:py-2 h-8 w-48  sm:h-12 sm:w-64 flex justify-center rounded-md bg-blue-900 text-xl sm:text-2xl leading-6 text-gray-100 shadow-sm focus-visible:outline focus-visible:outline-2"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => {
                  router.push("/");
                }}>
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
