type Todo = {
  title: string;
  description: string;
  isComplete: boolean;
};

//readOnly, para preservar a imutabildiade
const todo: Readonly<Todo> = {
  title: "Assistir Dark novamente",
  description: "Reelembrar todos os detalhes",
  isComplete: false,
};

console.log(todo);
// todo.isComplete = true // não podemos alterar diretamente por causa do readyonly

//para que possamos entao atualizar o objeto todo devemos criar uma função que permita reecriar o objeto com os novos valores setados

function updateTodo(todo: Todo, fieldsTypeUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsTypeUpdate };
}

//como na linha abaixo queremos fazer o update somente do IsComplete, utilizamos o Partial
//Partial deixa tudo opcional porêm ainda permite que os tipos permaneceçam
const todo2: Todo = updateTodo(todo, { isComplete: false });
console.log(todo2)

//Pick
//Criamos um tipo recebendo somente a propriedades desejadas

type TodoPreview = Pick<Todo, "title" | "description">

const todo3: TodoPreview = {
    title: 'Ghost of Tshshima',
    description: 'New game'
}

//Omit

type TodoPreview2 = Omit<Todo, "title" | "description">

//somente buscara os tipos q nao estao omitindo
const todo4: TodoPreview2 = {
    isComplete: true
}
