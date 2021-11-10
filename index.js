const assert = require("assert");
/*
Algorithm: Remove className in DOM Tree

Run this file under Node.js environment

Suppose we have a DOM Node object implement the following interface,
it is constructed with tagName in string format, its children is an array of Node or string,
and its attributes is an array of key value pairs.

interface Node {
    tagName: string;
    children: Array<Node | string>
    attributes: Array<{key: string; value: string | number | boolean}>
}

The initial Tree is a root of Node type. It can represent a real DOM in following format.

<div class="a-div" style="color: red;">
    123
    <span class="a-span">234</span>
    <input type="input" autofocus></input>
</div>

You are required to write a function named removeClassName, it takes in initialTree as parameter,
and it should return a DOM Tree where classNames in all Nodes were removed.

For example, if we process the previous tree by removeClassName function, the result should be an object
which is equivalent to the following DOM Tree.

<div style="color: red;">
    123
    <span>234</span>
    <input type="input" autofocus></input>
</div>

We have created the initialTree and expectedOutput for you
Its your show time now. Good luck!
*/

const initialTree = {
  tagName: "div",
  children: [
    "123",
    {
      tagName: "span",
      children: ["234"],
      attributes: [
        {
          key: "class",
          value: "a-span",
        },
      ],
    },
    {
      tagName: "input",
      children: [],
      attributes: [
        {
          key: "type",
          value: "input",
        },
        {
          key: "autofocus",
          value: true,
        },
      ],
    },
  ],
  attributes: [
    {
      key: "class",
      value: "a-div",
    },
    {
      key: "style",
      value: "color: red;",
    },
  ],
};

const expectedOutput = {
  tagName: "div",
  children: [
    "123",
    {
      tagName: "span",
      children: ["234"],
      attributes: [],
    },
    {
      tagName: "input",
      children: [],
      attributes: [
        {
          key: "type",
          value: "input",
        },
        {
          key: "autofocus",
          value: true,
        },
      ],
    },
  ],
  attributes: [
    {
      key: "style",
      value: "color: red;",
    },
  ],
};

function simpleClone(obj) {
  // clone an object and return with a new reference
  return Object.assign({}, obj);
}

function getIndex(params) {
  let indexes = [];
  params.map((param, index) => {
    if (param.key === "class") {
      indexes.push(index);
    }
  });
  return indexes;
}

function removeClassName(rootNode) {
  // console.log('TODO');
  // return initialTree;

  if (rootNode.attributes) {
    const index = getIndex(rootNode.attributes);
    index.map((i) => {
      rootNode.attributes.splice(i, 1);
    });
  }
  if (rootNode.children) {
    // console.log(rootNode.children);
    rootNode.children.map((child) => {
      removeClassName(child);
    });
  }

  return rootNode;
}

// TEST
assert.deepStrictEqual(
    expectedOutput,
    // simpleClone(initialTree),
    removeClassName(simpleClone(initialTree)),
    'Not Valid'
  );
