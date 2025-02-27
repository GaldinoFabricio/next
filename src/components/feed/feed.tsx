"use client";

import photosGet, { Photo } from "@/action/photo-get";
import React from "react";
import FeedPhotos from "./feed-phots";

export default function Feed({
   photos,
   user,
}: {
   photos: Photo[];
   user?: 0 | string;
}) {
   const [photosFeed, setPhotosFeed] = React.useState<Photo[]>(photos);
   const [page, setPage] = React.useState(1);
   const [loading, setLoading] = React.useState(false);
   const [infinite, setInfinite] = React.useState(
      photos.length < 6 ? false : true
   );
   const [scroll, setScroll] = React.useState(false);

   const fetching = React.useRef(false);
   function infiniteScroll() {
      console.log("aconteceu");
      if (fetching.current) return;
      fetching.current = true;
      setLoading(true);
      setTimeout(() => {
         setPage((currentPage) => currentPage + 1);
         fetching.current = false;
         setLoading(false);
      }, 1000);
   }

   React.useEffect(() => {
      if (page === 1) return;
      async function getPagePhotos(page: number) {
         const actionData = await photosGet(
            { page, total: 6, user: 0 },
            {
               cache: "no-store",
            }
         );
         if (actionData && actionData.data !== null) {
            const { data } = actionData;
            setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
            if (data.length < 6) setInfinite(false);
         }
      }
      getPagePhotos(page);
   }, [page]);

   React.useEffect(() => {
      if (infinite) {
         window.addEventListener("scroll", infiniteScroll);
         window.addEventListener("wheel", infiniteScroll);
      } else {
         window.removeEventListener("scroll", infiniteScroll);
         window.removeEventListener("wheel", infiniteScroll);
      }
      return () => {
         window.removeEventListener("scroll", infiniteScroll);
         window.removeEventListener("wheel", infiniteScroll);
      };
   }, [infinite]);

   React.useEffect(() => {
      const handleKeyDown = (event: any) => {
         if (scroll) return;
         if (event.key === "ArrowDown") {
            setScroll(true);
            window.scrollBy({
               top: window.innerHeight,
               behavior: "smooth",
            });

            setTimeout(() => {
               setScroll(false);
            }, 500);
         }

         if (event.key === "ArrowUp") {
            setScroll(true);
            window.scrollBy({
               top: -window.innerHeight,
               behavior: "smooth",
            });

            setTimeout(() => {
               setScroll(false);
            }, 500);
         }
      };

      const handleWheel = (event: any) => {
         if (scroll) return;

         setScroll(true);
         window.scrollBy({
            top: event.deltaY > 0 ? window.innerHeight : -window.innerHeight,
            behavior: "smooth",
         });

         setTimeout(() => {
            setScroll(false);
         }, 500);
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", handleWheel);

      return () => {
         window.removeEventListener("keydown", handleKeyDown);
         window.removeEventListener("wheel", handleWheel);
      };
   }, [scroll]);

   return (
      <div>
         <FeedPhotos photos={photosFeed} />
         {loading && <p>Carregando...</p>}
      </div>
   );
}
