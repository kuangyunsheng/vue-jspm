import Vue from 'vue';
import template from './todoList.html!text'

// 数据模型
let model = {
  newTodo: '',
  todos: [
    { text: 'Add some todos' }
  ]
};

// 增加代办事项
function addTodo() {
  var text = this.newTodo.trim()
  if (text) {
    this.todos.push({ text: text })
    this.newTodo = ''
  }
}

// 增移除代办事项
function removeTodo(index) {
  this.todos.splice(index, 1)
}

// 组件定义
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