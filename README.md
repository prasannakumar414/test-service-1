# test-service-1

A minimal command-line app that depends on [test-service-2](https://github.com/prasannakumar414/test-service-2).

Dependency direction: `test-service-1 -> test-service-2`.

## Run

Requires Node.js 18 or newer and Git.

```sh
npm install
npm start -- Prasanna
```

Output: `Hello, Prasanna!`

`package.json` declares test-service-2 as a Git dependency tracking its master branch. The app imports and calls its `greet` function. No build step or other dependencies.
