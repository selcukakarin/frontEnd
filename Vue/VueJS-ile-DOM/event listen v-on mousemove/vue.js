new Vue({
  el: "#app",
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    showAlert: function () {
      alert();
    },
    increaseCounter: function () {
      this.counter++;
    },
    updateCoords: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});