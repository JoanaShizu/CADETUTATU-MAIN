import Header from "@/components/header";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/map"), { ssr: false });

export default function Home() {
  return (
    <>
      <main>
        <Header isMap={true} />
        <Map />
      </main>
    </>
  );
}
