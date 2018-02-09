<template>
    <v-alert style="position: relative; top: 70px; right: 10px"
                        color="success"
                        icon="info_circle"
                        transition="slide-x-reverse-transition"
                        dismissible
                        v-model="showAlert"
                        class="elevation-20">
                {{ alertMessage }}
</v-alert>
</template>
<script>
export default {
  computed: {
    showAlert: {
      get() {
        return this.$store.getters.showAlert;
      },
      set(newBool) {
        return this.$store.dispatch("setAlert", newBool);
      }
    },
    alertMessage: () => {
      return "hello";
    }
  }
};
</script>
