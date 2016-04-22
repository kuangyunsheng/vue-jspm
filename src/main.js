import Vue from 'vue';
import todoList from './todoList';
import tmpl from './main.html!text';

var ready = ()=> {
    var root =  new Vue({  
        el: '#example',
        template: tmpl,
        components: {
            'todo-list': todoList
        }
    });
}

if ( document.addEventListener ) {
    document.addEventListener('DOMContentLoaded', ready);
}
else { 
    document.attachEvent( "onreadystatechange",ready);
}