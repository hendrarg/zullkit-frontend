<script setup>
import { ref } from "vue";
import ItemsCard from "./ItemsCard.vue";

const items = ref([
  {
    id: 1,
    title: "Mobile UI Kit",
    desc: "Mobile UI Kit",
    image: "items-1.jpg",
  },
  {
    id: 1,
    title: "Online Doctor Consultation",
    desc: "Website UI Kit",
    image: "items-2.jpg",
  },
  {
    id: 1,
    title: "Banking Crypto",
    desc: "Mobile UI Kit",
    image: "items-3.jpg",
  },
]);
</script>
<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <ItemsCard
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :desc="item.desc"
        :image="item.image"
      />
    </div>
  </div>
</template>