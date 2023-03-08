# Contributing to Tragic Methods

## Pull Requests

To start contributing, create a fork of this repo and when you have a working example
you can create a pull request for the main branch.

## Where to place your scripts

There is a directory for programming each language in the root of this project.
If there is no directory for you programming language, feel free to create one.

Every script should be placed in its own subdirectory. If you're going to create a script
called foo-bar.js you should place it under `/js/foo-bar/foo-bar.js`.

So the structure should be as follows

```bash
.
├── js
│   ├── example-quirk
│   │   ├── README.md
│   │   ├── your-script-part2.js
│   │   └── your-script-part1.js
│   └── ...
└── ...
```

## Document your scripts

Because we want to make people aware of the language quirks used in these examples
we require scripts to be document in a README.md file that resides in the same directory
as the script. Scripts without documentation will not be accepted.
