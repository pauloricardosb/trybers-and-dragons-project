import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static archetypeInstaces = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.archetypeInstaces += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.archetypeInstaces;
  }
}