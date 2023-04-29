import Instruction, { Color } from "../assembler/instruction";

/*
  Description:
    This class describes the BugBrain

  Attributes:
    instruction: List[Instruction]
      List of instructions for bugs
    pos: Int
      Pointer to the current instruction
 */

export default class BugBrain {
  constructor() {
    this.instruction = new Instruction();
    this.pos = 0;
  }

  getNextInstruction() {
    pos++;
    return instruction[pos];
  }
}
