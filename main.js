
Vue.config.performance = true;
Vue.config.warnHandler = function(msg, vm, trace)
{
    console.debug("ERROR! See, warnHandler callback function.");
}

console.debug(Vue.config);

let app = new Vue({
    el: '#app',
    data: {
        text: 'Application Instance'
    }
});


console.debug(app);
