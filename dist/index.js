'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Grids = new Mongo.Collection('Grids');

Grids.cellSchema = new SimpleSchema({
  isOpen: {
    type: Boolean
  },
  isBomb: {
    type: Boolean
  },
  numBombsAround: {
    type: Number
  }
});

Grids.schema = new SimpleSchema({
  width: {
    type: Number
  },
  height: {
    type: Number
  },
  nBombs: {
    type: Number
  },
  rows: {
    type: [[Grids.cellSchema]]
  }
});

exports.default = Grids;