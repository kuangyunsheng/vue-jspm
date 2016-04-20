import o from './todoList';

describe('test todoList', ()=>{
    let todoList = new o();
    
    it('初始值', ()=>{
        expect(todoList).to.have.property('newTodo', '');
    });
    
    it('addTodo',()=>{
        todoList.newTodo = 'a';
        todoList.addTodo();
        expect(todoList.todos.length).to.equal(2);
    });
    
    it('removeTodo',()=>{
        todoList.removeTodo();
        expect(todoList.todos.length).to.equal(1);
    })
});