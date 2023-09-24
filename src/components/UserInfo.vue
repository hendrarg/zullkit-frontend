<script setup>
import { userStore } from "@/stores/user";
import { computed } from "vue";

const store = userStore();
const user = computed(() => store.user);
console.log(user);
</script>

<template>
  <div class="flex item-center md:order-2">
    <div class="mr-2 text-sm my-auto font-regular">{{ user.data.name }}</div>
    <button
      type="button"
      class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-300"
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="dropdown"
    >
      <span class="sr-only">Open user menu</span>
      <img
        class="w-8 h-8 rounded-full"
        src="https//:ui-avatars.com/api/?name=Galih+Pratama&background=160442&color=fff"
        alt="user photo"
      />
    </button>
  </div>
</template>