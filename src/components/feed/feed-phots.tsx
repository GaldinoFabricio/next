import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";
import { Photo } from "@/action/photo-get";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
   return (
      <ul className={`${styles.feed} animeLeft`}>
         {photos.map((photo, i) => (
            <li className={styles.photo} key={photo.id + i}>
               <Link href={`/foto/${photo.id}`} scroll={false}>
                  <Image
                     src={photo.src}
                     width={0}
                     height={0}
                     alt={photo.title}
                     sizes="80vw"
                     style={{
                        height: "100vh",
                        width: "100vw",
                        objectFit: "cover",
                        filter: "brightness(0.8)"
                     }}
                  />
               </Link>
               <div
                  className={styles.texto}
               >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua.
               </div>
            </li>
         ))}
      </ul>
   );
}
