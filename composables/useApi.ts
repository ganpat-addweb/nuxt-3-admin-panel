import { ofetch } from "ofetch";
import { useSession } from "@/stores/useSession";
export function useOFetch() {
  const UseSession = useSession();
  return ofetch.create({
    baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:54321/api/",
    onRequest: ({ options }) => {
      if (UseSession.isLoggedIn && UseSession.tokenComputed) {
        options.headers = new Headers(options.headers);
        options.headers.set("Authorization", `Bearer ${UseSession.tokenComputed}`);
      }
    },
  });
}
