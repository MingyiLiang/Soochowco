export interface IBlock {
    block: Block;
  }
  
  export class Block {
    name: string;
    private elements: { [value: string]: string } = {};
    private validNames: { [value: string]: string } = {};
    constructor(blockName: string) {
      if (!blockName) {
        throw new Error('Block name cannot be undefined.');
      }
      this.name = this.validName(blockName);
    }
  
    element = (value: string) => {
      return this.elements[value] || (this.elements[value] = `${this.name}__${value}`);
    };
  
    modifier = (value: string) => {
      return this.validName(value);
    };
  
    private validName = (value: string) => {
      let validName = this.validNames[value];
      if (!validName) {
        validName = value.charAt(0).toLowerCase() + value.slice(1);
        validName = validName.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
        this.validNames[value] = validName;
      }
      return validName;
    };
  }
  