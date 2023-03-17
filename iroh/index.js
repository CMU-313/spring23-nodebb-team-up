/* eslint-disable */
'use strict';

const Iroh = require('iroh');

let code = `let foo = 42`;

let stage = new Iroh.Stage(code);
stage.addListener(Iroh.VAR).on("after", function(e) {
  console.log(e.name, "=>", e.value);
});

eval(stage.script);
