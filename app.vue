<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <DeletePopUP />
  </div>
</template>
<script setup>
import { Notification, Notivue, push } from "notivue";
onMounted(() => {
  push.success("Welcome to Notivue");
});
</script>
