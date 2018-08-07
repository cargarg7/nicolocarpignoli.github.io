AFRAME.registerComponent('markerhandler', {

  init: function() {
    // Set up the tick throttling. Will check if marker is active every 500ms
    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  },

  tick: function(t, dt) {
    if (document.querySelector("#animated-marker").object3D.visible == true) {
        // MARKER IS PRESENT
        //alert("MARKER IS PRESENT")
        console.log('s', 'AAA', t, dt,);
        var animatedObject = document.querySelector('#animated-model');
        console.log('AAA', t, dt, animatedObject);
        animatedObject.addEventListener('click', function() {
            alert("clicconeee")
        });
    }
}});
