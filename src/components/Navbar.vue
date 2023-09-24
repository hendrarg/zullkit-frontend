<script setup>
import { userStore } from "@/stores/user";
import { computed, onMounted } from "vue";

import Logo from "./Logo.vue";
import NavigationLinks from "./NavigationLinks.vue";
import UserInfo from "./UserInfo.vue";
import AuthButton from "./AuthButton.vue";

const store = userStore();
const getUser = computed(() => store.getUser);
const isLoggedIn = computed(() => store.isLoggedIn);
const user = computed(() => store.user);

onMounted(() => {
  store.fetchUser();
  console.log(store);
});
</script>

<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div
      class="container flex flex-wrap items-center justify-between mx-auto my-2"
    >
      <Logo />
      <NavigationLinks />
      <UserInfo v-if="isLoggedIn" />
      <AuthButton v-else />
    </div>
  </nav>
</template>
