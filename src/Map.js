import assert from "../utils/Assertion.js";
import { Color, Position } from "../utils/Enums.js";

export class map {
  constructor(x, y, mapCells) {
    this.x = x;
    this.y = y;
    this.mapCells = mapCells;
  }

  cellAt(position) {
    return mapCells[position.x][position.y];
  }

  adjacent(position, direction) {}

  turn(direction, integer) {}

  sensedCell(position, direction) {}

  isObstructedAt(position) {
    return mapCells[position.x][position.y].isObstructed();
  }

  isObstructedAt(position) {
    return mapCells[position.x][position.y].isOccupied();
  }

  setBugAt(position, bug) {
    mapCells[position.x][position.y].setBug(bug);
  }

  getBugAt(position) {
    return mapCells[position.x][position.y].getBug();
  }

  removeBugAt(position) {
    mapCells[position.x][position.y].removeBug();
  }

  setFoodAt(position, food) {
    mapCells[position.x][position.y].setFood(food);
  }

  getFoodAt(position) {
    return mapCells[position.x][position.y].getFood();
  }

  isFriendlyBaseAt(position, color) {
    return mapCells[position.x][position.y].isFriendlyBase(color);
  }

  isEnenmyBaseAt(position, color) {
    return mapCells[position.x][position.y].isEnemyBase(color);
  }

  setMarkerAt(position, color, integer) {
    mapCells[position.x][position.y].setMarker(color, integer);
  }

  getMarkerAt(position, color) {
    return mapCells[position.x][position.y].getMarker(color);
  }

  isFriendlyMarkerAt(position, color) {
    return mapCells[position.x][position.y].isFriendlyMarker(color);
  }

  isEnemyMarkerAt(position, color) {
    return mapCells[position.x][position.y].isEnemyMarker(color);
  }

  getFoodAt(position) {
    return mapCells[position.x][position.y].getFood();
  }
}
