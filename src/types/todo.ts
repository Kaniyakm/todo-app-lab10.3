// ---------------------------------------------
// Todo Type Definition
// ---------------------------------------------
// This file defines the structure of a single Todo item.
// We keep this in a separate folder (src/types) so that
// the type can be imported anywhere in the project.
// This improves maintainability and prevents duplication.
// ---------------------------------------------

// The Todo interface describes what a Todo object looks like.
// Every Todo in the app MUST follow this structure.
export interface Todo {
  // A unique identifier for each todo.
  // We will generate this using Date.now() or crypto.randomUUID().
  id: string;

  // The text/content of the todo item.
  // Example: "Buy groceries"
  text: string;

  // Whether the todo is completed or not.
  // false = active, true = completed.
  completed: boolean;
}
