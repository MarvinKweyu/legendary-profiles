<template>
  <div class="container">
    <VUserSearchForm @submitted="searchUser" />
    <VUserProfile :user="user" class="mt-3" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import VUserSearchForm from "@/components/VUserSearchForm";
import VUserProfile from "@/components/VUserProfile";
export default {
  name: "UserView",
  components: {
    VUserSearchForm,
    VUserProfile,
  },
  computed: {
    //get users from the store
    ...mapState({
      user: "user",
    }),
  },
  methods: {
    searchUser(username) {
      this.$store.dispatch("SEARCH_USER", { username });
    },
  },
};
</script>
