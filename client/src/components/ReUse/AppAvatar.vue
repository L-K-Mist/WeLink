<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md8
        text-xs-center
        layout
        align-center
        justify-center
      >

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    crossLength: 70,
    tile: false
  }),

  computed: {
    avatarSize() {
      return `${this.crossLength}px`;
    }
  },
  props: ["src"]
};
</script>

