import Vue from 'vue';
import todoList from './todoList';
import tmpl from './main.html!text';

export default new Vue({
    el: '#example',
    template: tmpl,
    components: {
        'todo-list': todoList
    }
});