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
        <v-avatar
          tile="false"
          :size="avatarSize"
          class="grey lighten-4"
        >
          <img src="/static/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    slider: 56,
    tile: false
  }),

  computed: {
    avatarSize() {
      return `${this.slider}px`;
    }
  }
};
</script>

