<template>
  <div class="container">
    <h3>Enter a github username to get their details</h3>
    <form @submit.prevent="$emit('submitted', username)" class="my-3">
      <input
        type="text"
        class="mx-1"
        placeholder="Github username"
        v-model="username"
      />
      <button type="submit" class="btn btn-secondary btn-sm shadow-none my-1">
        Get details
      </button>
    </form>
  </div>
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
