let app = new Vue({
    el: '#app',
    data: {
        text: 'Application Instance',
        users: null,
        show: true,
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    },

    methods: {
        /**
         * Test HTTP request for debugging
         */
        request: function()
        {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((json) => this.users = json);
        }
    },

    mounted: function()
    {
    }

});

