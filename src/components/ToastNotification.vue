<template>
  <div
    class="my-notification bg-danger position-fixed bottom-0 end-0 p-3 mb-1"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    style="z-index: 5"
    data-bs-autohide="false"
    data-bs-delay="10000"
  >
    <div class="toast-header">
      <strong class="me-auto">Unable to get user</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">
      Unable to get the specified user: {{ errorDetail.userSearch }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ToastNotification",
  props: {
    errorDetail: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.my-notification {
  border-radius: 10px !important;
}
</style>
