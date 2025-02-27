export const API_URL = "https://dogsapi.origamid.dev/json";

export function PHOTOS_GET({
   page,
   total,
}: {
   page: number;
   total: number;
}) {
   return {
      url: `${API_URL}/api/photo/?_page=${page}&_total=${total}`,
   };
}
