export default {
      SET_USER(state, user) {
    state.user = { ...user }
  },
  SET_ERROR(state, userSearch){
    if (userSearch){
      state.error = {"userSearch": userSearch}
    }else{
      state.error = {}
    }
  }
};
