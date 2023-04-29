import assert from "../utils/asser.js";
import Instruction from "./instruction.js";
import { parseInstrcutionFile } from "../utils/paser.js";

/* 
  Description: 
    This class describes assemler 

  Attributes:
    instructions: List[Instruction]
      Contains list of instructions
*/

export class Assembler {
  /*
  Attributes:
    file: File with information about instructions
*/
  constructor(file) {
    this.instructions = parseInstrcutionFile(file);
  }
}
