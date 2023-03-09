# Contributing to Tragic Methods

## Pull requests

To start contributing, create a fork of this repo. When you have a working example you can create a pull request for the main branch.

## Naming your quirk

Name your quirk as narrow as possible to avoid collisions with other possible quirk names.

```diff
-- array-addition
++ array-addition-results-in-empty-string
```

## Where to place your quirk

There is a directory for each language in the root of this project. If there is no directory for you programming language, feel free to create one.

Every quirk should be placed in its own subdirectory. If you're going to create a `js` quirk called `foo-bar` with a script called `example.js` you should place your script under `/js/foo-bar/example.js`.

So the structure should be as follows:

```bash
.
├── js
│   ├── foo-bar
│   │   ├── README.md
│   │   └── example.js
│   └── ...
└── ...
```

## Document your quirk

> :warning: Scripts without documentation will not be accepted.

Because we want to make people aware of the language quirks used in these examples
we require them to be document in a `README.md` file that resides in the same directory
as the scripts.

### Structure of the readme

#### The title

The first line of your readme should be a title, most of the times this will just be the directory name of your quirk.

#### Information about the language

Because programming languages are ever evolving, we would like to keep track of which version of the language you used to test your quirk.

If more information is needed (E.g. compiler used), you can add that information here as well

Example:
```
Version: C++ 17
Compiler: GCC 11
```

#### Explanation of your quirk

A detailed explanation of your quirk that allows the user to understand the quirk without actually going through the scripts attached. If needed, add some code snippets.
