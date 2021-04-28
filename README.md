# React ToDo App
[DEMO LINK](git@github.com:oleguner/React_Todo-Application.git)

## Description
Implemented simple [TODO app](http://todomvc.com/examples/vanillajs/) working as described below but works on react.

> If you are not sure about how a feature should work just open the real TodoApp and look how it works there


## Tasks
1. Implemented `TodoApp` component with an input field to create new todos on submit (Enter). Each item have:
    - `id` - unique identifier (`+new Date()`)
    - `title` - the text of a todo
    - `completed` - current status (`false` by default)
1. Showing the number of not completed todos in `TodoApp`

1. Implemented `TodoList` component to display a list of todos

1. Implemented `TodoItem` component with ability to toggle the `completed` status.

1. Added ability to toggle the completed status of all the todos.
    - `toggleAll` checkbox is active only if all the todos are completed
    - if you click the checkbox all the items should be marked as `comlpeted`/`not completed`  depending on `toggleAll` status

1. Created `TodosFilter` component to switch between `all`/`active`/`completed` todos (add it to the `App`)

1. Added ability to remove an item.

1. Added ability to `clear completed` - remove all completed items from the list.

1. Hidind everything except the input to add a new todo if there are no todos. But not if todos are just filtered out.

1. Made inline editing for the TODO item
    - double click on the TODO title makes it editable (just add a class `editing` to a `li`)
    - `Enter` saves changes
    - `Ecs` cancels editing
    - Todo title can't be empty!

1. Saving state of the APP to the `localStorage`.
