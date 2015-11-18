Overviewer
======

**overviewer** lets you view the output of multiple programs at the same time. It also shows if a program failed or succeeded by using an appropriately colored border.

![Screenshot](doc/screenshot.png)

## Installation ##

**Global**:

`npm install -g overviewer`

Use `overviewer` to start it.

**Local**:

`npm install --save-dev overviewer`

This is the preferred way if you want integrate overviewer into your project's development workflow because it will be installed automatically for others that work on your project.

## Usage ##

Use `overviewer` to start it when you installed globally and `./node_modules/.bin/overviewer` when you installed it locally.

Keybinding        | Action
------------------| -------------
q, Escape, Ctrl-c | Quit
Tab               | Focus next output
Shift-Tab         | Focus previous output
Up                | Scroll up
Down              | Scroll down

**You must have a `.overviewerrc` in the working directory. See below.**

## Configuration ##

To specify which programs should be run by overviewer a `.overviewerrc` file has to be created.

**Example**:

```js
{
  "reporters": [
    {
      "title": "Linting",
      "command": "node_modules/.bin/eslint src --color",
    },

    {
      "title": "Babel Doctor",
      "command": "node_modules/.bin/babel-doctor --colors",
      "failure": "Found potential issues on your machine",
    },

    {
      "title": "Dependency Usage Analysis",
      "command": "node_modules/.bin/depcheck --dev false",
    },

    {
      "title": "Test",
      "command": "npm test",
    },

    {
      "title": "Dependency Update Analysis",
      "command": "node_modules/.bin/ncu --error-level 2",
      "success": "All dependencies match",
    },
  ],
}
```

## Feedback ##

I appreciate any kind of feedback. Just create an issue or drop me a mail. Thanks!

## License ##

See [LICENSE](LICENSE).
