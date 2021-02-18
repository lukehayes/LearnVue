let app = new Vue({
    'el' : '#app',
    'data' : {
        col: "#FF11aF;",
        n : 100,
        todos: [
            { item: "Learn Vue.js", completed: false},
            { item: "Build a Startup", completed: false},
            { item: "Read The Pragmatic Programmer", completed: false},
        ]
    },

    methods : {
        clicker: function()
        {
            console.log("Clicked.");
        }
    }
});
