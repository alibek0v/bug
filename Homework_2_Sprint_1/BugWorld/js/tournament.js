import assert from "../utils/assert.js";
import { parseBugFile, parseWorldFile } from "./utils/paser.js";
/*
  Description:
    This class describes the Tournament

 */
export class Tournament {
  /*
  Attributes:
    world: WorldFile
    redBugs: RedBugFile
    blackBugs: BlackBugFile
*/
  constructor(world, redBugs, blackBugs) {
    this.world = parseWorldFile(world);
    this.redBugs = parseBugFile(redBugs);
    this.blackBugs = parseBugFile(blackBugs);
  }

  /*
  Description:
    Run the tournament
*/
  run() {}

  /*
  Description:
    Return the current state of the tournament
*/
  getCurrentTournamentStatus() {}
}
