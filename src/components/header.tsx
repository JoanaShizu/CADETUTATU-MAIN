import Link from "next/link";
import { useState } from "react";
import { BsFillTreeFill } from "react-icons/bs";
import { AiFillBug } from "react-icons/ai";
import { GiRabbitHead } from "react-icons/gi";
import { BiReset } from "react-icons/bi";
import { useSpecies } from "@/contexts/dataContext";

interface IHeaderProps {
  isMap: boolean;
}

const Header = ({ isMap }: IHeaderProps) => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const { setSpeciesInfo, initialData } = useSpecies();

  const plants = initialData.filter((plant) => plant.icon_color === "#15803d");
  const vertebrates = initialData.filter((vertebrate) => vertebrate.icon_color === "#1d4ed8");
  const invertebrates = initialData.filter((invertebrate) => invertebrate.icon_color === "#b91c1c");
  return (
    <div className="w-[100vw] top-0 inset-x-0">
      <div className=" bg-blue-900  text-gray-100 h-16">
        <div className="flex flex-row items-center justify-center sm:justify-between  mx-4">
          <Link href={"/"} className="text-3xl mt-3 font-semibold self-center">
            CadeTuTatu
          </Link>
          <div>
            {isMap && (
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-none px-3 pt-3 text-base font-semibold text-gray-100 border-none"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setdropdownOpen((prev) => !prev)}>
                Filtros
                <svg
                  className="block -mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}

            {dropdownOpen && (
              <div
                className="absolute right-0 z-40 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button">
                <div className="py-1" role="none">
                  <button
                    className="text-gray-700 w-full px-4 py-2 text-left text-sm  hover:bg-gray-100"
                    role="menuitem"
                    id="menu-item-0"
                    onClick={() => {
                      setSpeciesInfo(plants);
                    }}>
                    <div className="flex flex-row items-center gap-4">
                      <BsFillTreeFill className="fill-green-700 h-5 w-5" /> <span>Plantas</span>
                    </div>
                  </button>
                  <button
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm  hover:bg-gray-100"
                    role="menuitem"
                    id="menu-item-1"
                    onClick={() => {
                      setSpeciesInfo(invertebrates);
                    }}>
                    <div className="flex flex-row items-center gap-4">
                      <AiFillBug className="fill-red-700 h-5 w-5" /> <span>Invertebrados</span>
                    </div>
                  </button>
                  <button
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm  hover:bg-gray-100"
                    role="menuitem"
                    id="menu-item-2"
                    onClick={() => {
                      setSpeciesInfo(vertebrates);
                    }}>
                    <div className="flex flex-row items-center gap-4">
                      <GiRabbitHead className="fill-blue-700 h-5 w-5" /> <span>Vertebrados</span>
                    </div>
                  </button>
                  <button
                    className="text-gray-700 w-full px-4 py-2 text-left text-sm  hover:bg-gray-100"
                    role="menuitem"
                    id="menu-item-0"
                    onClick={() => {
                      setSpeciesInfo(initialData);
                    }}>
                    <div className="flex flex-row items-center gap-4">
                      <BiReset className="fill-black h-5 w-5" /> <span>Limpar filtro</span>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
