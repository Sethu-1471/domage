# Domage: DOM Manipulation Library

Domage is a lightweight JavaScript library for DOM manipulation, designed to simplify common tasks such as creating, accessing, and manipulating elements on the web page.

## Features

- **Simple and Intuitive API:** Domage provides a straightforward API for performing common DOM operations, making it easy to work with elements in the document.
- **Element Creation and Access:** Easily create new elements or access existing elements by their IDs or selectors.

- **Visibility Check:** Check whether an element is currently visible within the viewport.

- **Copying and Cloning Elements:** Copy or clone elements and append them to other elements in the document.

- **Adding and Removing Elements:** Add new elements to the document or remove existing elements.

- **Positional Insertion:** Insert elements at specific positions within parent elements.

## Installation

You can install Domage via npm:

```
npm install domage
```

## Example

```javascript
import * as Domage from "domage";

// Check if Domage is initialized
Domage.isDomageInit();

// Create a new element
const newElement = Domage.createElement("div");

// Get an element by ID
const existingElement = Domage.getElementById("myElementId");

```

## Contribution

Contributions are welcome! If you encounter any bugs or have suggestions for new features, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.
