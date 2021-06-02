<template>
  <form @submit.prevent="$emit('submitted', username)">
    <input type="text" v-model="username" />
    <button type="submit">Get details</button>
  </form>
</template>

<script>
export default {
  name: "VUserSearchForm",
  data() {
    return {
      username: "",
    };
  },
};
</script>
