# how to use

## install library with npm

```
$ npm install

or

$ sudo npm install

```

## compile(transpile)

when run following command, generated file `./dist/app.js` that transpiled ES6 to ES5.

```
$ bin/gulp
```

## watch

when run folllowing command, turn on `watch` mode.
when you modified files that put under `src` directory, default task is triggered(this means run command `$gulp`).

```
$ bin/gulp watch
```

## check behavior of app.js

run following command.

```
$ node dist/app.js
```
