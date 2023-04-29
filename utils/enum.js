import assert from "../utils/Assertion.js";

/* conditions of the bug */
export const BugConditions = Object.freeze([
  "Friend",
  "Foe",
  "FriendWithFood",
  "FoeWithFood",
  "Food",
  "Rock",
  "Marker",
  "FoeMarker",
  "Home",
  "FoeHome",
]);

/* enumeration class which expresses color */
export class Color {
  static red = new Color("red");

  static black = new Color("black");

  constructor(name) {
    this.name = name;
  }

  opposite() {
    if (this == Color.red) {
      return Color.black;
    }
    return Color.red;
  }
}
Object.freeze(Color);

export const CellDirection = Object.freeze([
  "Here",
  "LeftAhead",
  "RightAhead",
  "Ahead",
]);
export const Direction = Object.freeze(["Left", "Right"]);

/* enumeration class which expresses cell condition */
export class CellCondition {
  constructor(name, pos) {
    this.name = name;
    if (["FoeMarker", "Marker"].includes(name)) {
      assert([0, 1, 2, 3, 4, 5].includes(pos), "marker is out of range");
      this.pos = pos;
    } else {
      assert(pos == undefined, "pos available only for Marker");
    }
  }
}

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
Object.freeze(Position);
