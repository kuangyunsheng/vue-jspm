import Vue from 'vue';
import template from './todoList.html!text'

let model = {
  newTodo: '',
  todos: [
    { text: 'Add some todos' }
  ]
};

function addTodo() {
  var text = this.newTodo.trim()
  if (text) {
    this.todos.push({ text: text })
    this.newTodo = ''
  }
}

function removeTodo(index) {
  this.todos.splice(index, 1)
}

var todoList = Vue.extend({
  template,
  data() {
    return model;
  },
  methods:{
    addTodo,
    removeTodo
  }
});

export default todoList;