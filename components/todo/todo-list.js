Vue.component('todo-item', {
    props: {
        item: Object
    },
    template: '<p> {{item.id}} - {{item.text}} </p>'
})

let app = new Vue({
    'el' : '#app',
    'data' : {
        col: "#FF11aF;",
        todos: [
            { id:1, item: "Learn Vue.js", completed: false},
            { id:2, item: "Build a Startup", completed: false},
            { id:3, item: "Read The Pragmatic Programmer", completed: false},
        ]
    },

    methods : {
        clicker: function()
        {
            console.log("Clicked.");
        }
    }
});
