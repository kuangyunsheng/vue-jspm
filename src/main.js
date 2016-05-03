import Vue from 'vue';
import todoList from './todoList';
import tmpl from './main.html!text';

function bootstrap() {
    var root = new Vue({
        el: '#example',
        template: tmpl,
        components: {
            'todo-list': todoList
        }
    });
}

if (document.querySelector('#example')) {
    bootstrap();
}
else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', bootstrap);
}
else {
    document.attachEvent("onreadystatechange", bootstrap);
}