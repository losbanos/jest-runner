import IShield from '@/components/ioc/interface/IShield';
import {injectable, inject} from 'inversify';

@injectable()
class Helmet implements IShield {
    public name: string;
    public defenseType: string;
    public price: number;

    public constructor() {
        this.name = 'Helmet';
        this.defenseType = 'protect';
        this.price = 2400;
    }
    public wear() {
        return `Warrior is wearing a ${this.name}`;
    }
}

@injectable()
class Glove implements  IShield {
    public name: string;
    public defenseType: string;
    public price: number;

    public constructor() {
        this.name = 'Glove';
        this.defenseType = 'multi';
        this.price = 1000;
    }
    public wear() {
        return `Warrior is wearing a ${this.name}`;
    }
}

@injectable()
class Armor implements IShield {
    public name: string;
    public defenseType: string;
    public price: number;

    private isAttached: boolean = false;
    public constructor() {
        this.name = 'Armor';
        this.defenseType = 'defense';
        this.price = 2000;
    }
    public wear() {
        return `Warrior is wearing a ${this.name}`;
    }
}
export {
    Helmet,
    Glove,
    Armor
}
