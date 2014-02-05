# grunt-glitch

> A grunt task you shouldn't use.

This grunt task is used to intentionally corrupt and mangle files. Use with caution, or malice.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-glitch --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-glitch');
```

## The "glitch" task

### Overview
In your project's Gruntfile, add a section named `glitch` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  glitch: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.enabled
Type: `String`
Default value: false

Must be explicitly set to true to activate the task. Make sure you fully understand what this grunt plugin does before testing it.

#### options.probability
Type: `String`
Default value: `0.0001`

Probability of deviation per byte (between 0 and 1).

#### options.deviation
Type: `Number`
Default value: `2`

Maximum value deviation per byte.

#### options.whiteList
Type: `Number[]`
Default value: `[]`

Array of whitelisted values, if set only bytes with those values will be modified.

#### options.blackList
Type: `Number[]`
Default value: `[]`

Array of blacklisted values, no byte with those values will be modified.

#### options.deviationFunction
Type: `Function`
Default value: `null`

Replace the default deviation function of the stream, allows to write more complex filtering than whitelisting and blacklisting.

### Usage Examples

In this example, we slightly corrupt every jpg files to get glitched images.

```js
grunt.initConfig({
  glitch: {
    options: {
      probability : 0.00001,
      deviation : 1
    },
    files: {
      'dest/default_options': ['src/**/*.jpg'],
    },
  },
});
```
