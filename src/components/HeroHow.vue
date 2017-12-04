<template>
  <div id="app">
    <div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Animations</h1>
          <hr>
          <button class="btn btn-primary" @click="show = !show">This is some info</button>
          <br><br>
          <transition name="dee-control"
                  enter-active-class="animated bounce"
                  leave-active-class="animated shake"
          >
          <v-alert color="info" icon="info" value="true">
            This is a info alert.
          </v-alert>


          </transition>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.wrap-banner {
  position: relative;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>
