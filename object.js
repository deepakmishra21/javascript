var person = {
    name: "Deepak Mishra",
    play: function () {
        console.log("I am playing right now.")
    },
    name() {
        console.log(this.name);
    }
}