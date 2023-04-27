import assert from "../utils/Assertion.js";
import { Color, Position } from "../utils/Enums.js";

/*
  Description:
    This class describes the WorldCell

  Attributes:
    obstructed: bool
      Does the cell is obstructed
    bug: Bug
      Bug instance if the cell contains the bug
    food: Int
      Number of food in this cell
    marker: Marker
      Cell's marker
    bese: Color
      Base color if not undefined
 */

export class Mapbox {
  constructor(obstructed, food, baseColor) {
    this.obstructed = obstructed;
    this.bug = undefined;
    this.food = food;
    this.marker = -1;
    this.base = baseColor;
  }

  isObstructed() {
    return this.obstructed;
  }

  isOccupied() {
    return this.obstructed || this.bug != undefined;
  }

  setBug(bug) {
    this.bug = bug;
  }

  getBug() {
    return bug;
  }

  removeBug() {
    this.bug = undefined;
  }

  setFood(food) {
    this.food = food;
  }

  isFriendlyBase(color) {
    return color == this.color;
  }

  isEnemyBase(color) {
    return color != this.color && this.color != undefined;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return marker;
  }
}
