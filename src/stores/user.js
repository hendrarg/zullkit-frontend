import { defineStore } from "pinia";
import axios from "axios";

export const userStore = defineStore("userStore", {
  id: "user",
  state: () => ({
    user: false,
  }),
  getters: {
    isLoggedIn: (state) => state.user !== false,
    getUser: (state) => state.user,
  },
  actions: {
    async fetchUser() {
      console.info("localStorage", localStorage);
      try {
        const { data } = await axios.get("https://zullkit-backend.belajarkoding.com/api/user", {
          headers: {
            Authorization: localStorage.getItem("token_type") + " " + localStorage.getItem("access_token"),
          },
        });
        this.user = data;
      } catch (error) {
        this.user = false;
      }
    },
  },
});
