import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(target: Fighter): void;
  special?(target: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}