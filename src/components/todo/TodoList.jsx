import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {todos.length ? (
        <div data-testid="TodoList">
          {todos.map((todo) => {
            return (
              <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            );
          })}
        </div>
      ) : (
        <div data-testid="no-todos">Create your first todo</div>
      )}
    </>
  );
}
