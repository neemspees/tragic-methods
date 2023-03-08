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

Because we want to make people aware of the language quirks used in these examples
we require them to be document in a `README.md` file that resides in the same directory
as the scripts.

Be sure to add a title to your readme.

> :warning: Scripts without documentation will not be accepted.
