<template dark>
    <div id="app">
      <div  id="example">
        <vue-particles
          color="#dadbe5"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="6"
          linesColor="blue"
          :linesWidth="2"
          :lineLinked="true"
          :lineOpacity="0.5"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >
          <h1>Hello World from DillyDee</h1>
        </vue-particles>
      </div>

    </div>
 </template>

 <style>
#example {
  background-image: url("/static/zen-garden-opt2.jpg");
}
</style>

