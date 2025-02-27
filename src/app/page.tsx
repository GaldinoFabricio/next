import photosGet from "@/action/photo-get";
import Feed from "@/components/feed/feed";
import Image from "next/image";

export default async function Home() {
   const { data } = await photosGet();
   return (
      <>
         <div
            style={{
               zIndex: 100,
               position: "fixed",
               top: 0,
               left: 0,
               color: "#fff",
               marginTop: "1.5rem",
               marginLeft: "1.5rem",
            }}
         >
            <Image
               src={"/bp.png"}
               height={100}
               width={200}
               alt="Logo do site"
               style={{ filter: "invert(1)" }}
            />
         </div>
         <section className="container mainContainer">
            {data && <Feed photos={data} />}
         </section>
      </>
   );
}
