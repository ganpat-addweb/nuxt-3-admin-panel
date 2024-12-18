import { acceptHMRUpdate, defineStore } from "pinia";
import { ref, computed } from "vue";
import { useOFetch } from "~/composables/useApi";
export const useSession = defineStore("useSession", () => {
  const user = ref();
  const fetch = useOFetch();
  const token = useLocalStorage("token", undefined);
  const isLoggedIn = computed(() => token.value != undefined && token.value != null && token.value != "");
  function setUser(newUser) {
    user.value = newUser;
  }
  async function logoutUser() {
    token.value = undefined;
    user.value = undefined;
    navigateTo("/");
  }
  const adminLogin = async (data) => {
    const promise = push.promise("Logging in...");
    try {
      const resp = await fetch("admin/login", {
        method: "POST",
        body: data,
      });
      if (resp.status) {
        token.value = resp.data.token;
        user.value = resp.data.user;
        // push.success("Login success");
        promise.resolve("Login success");
        navigateTo("/admin");
      }
      return resp;
    } catch (error) {
      push.error(error.data);
    }
  };
  return {
    user,
    tokenComputed: computed(() => token.value),
    isLoggedIn,
    logoutUser,
    setUser,
    adminLogin,
  };
});
/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSession, import.meta.hot));
}
