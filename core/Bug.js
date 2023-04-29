import assert from "../utils/Assertion.js";
import { Color, Position } from "../utils/Enums.js";
import { BugBrain } from "./BugBrain.js";

/*
  Description:
    This class describes the Bug

  Attributes:
    id: Number
      Unique positive number which determines the evaluation sequence of the bug
    color: Color
      The bug's color
    state: Number
      The bug's internal state
    resting: Number
      Duration of sleep after successful movement
    direction = 0: Number
      Current absolute heading
    hasFood = false: Boolean
      If bug carries a food or not
    instructionPos = 0: Number
      Posititon in instruction list
 */

const RESTING_LIMIT = 14;
export default class Bug {
  constructor(color) {
    assert(color instanceof Color);

    this.state = 0;
    this.color = color;
    this.resting = 0;
    this.direction = 0;
    this.hasFood = false;
    this.bugBrain = new BugBrain();
    this.position = new Position();
    this.isAlive = false;
  }

  dead() {
    isAlive = false;
  }

  kill() {
    // TODO
  }

  getPosition() {
    return bugPosition;
  }

  turnLeft() {
    this.direction += 5;
    this.direction %= 6;
  }

  turnRight() {
    this.direction += 1;
    this.direction %= 6;
  }
}
