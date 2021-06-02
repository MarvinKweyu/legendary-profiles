<template>
  <div>User Profile</div>
</template>

<script>
export default {
  name: "VUserProfile",
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>
