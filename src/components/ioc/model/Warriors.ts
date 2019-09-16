import {injectable, inject} from 'inversify';
import IWarrior from '@/components/ioc/interface/IWarrior';
import IWeapon from '@/components/ioc/interface/IWeapon';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import IShield from '@/components/ioc/interface/IShield';
import {Armor, Glove, Helmet} from '@/components/ioc/model/Shield';

@injectable()
class Ninja implements IWarrior {
    public name!: string;
    public weapon: IWeapon;
    public shield: IShield;

    public constructor(
        @inject(ServiceIdentifier.SHURIKEN) weapon: IWeapon,
        @inject(ServiceIdentifier.GLOVE) glove: Glove
    ) {
        // this.name = 'Ninja';
        this.weapon = weapon;
        this.shield = glove;
    }
    public start() {
        console.log(this.shield.wear());
    }
}

@injectable()
class Samurai implements IWarrior {
    public name!: string;
    public weapon: IWeapon;
    public shield: IShield;

    public constructor(
        @inject(ServiceIdentifier.SWORD) weapon: IWeapon,
        @inject(ServiceIdentifier.ARMOR) armor: Armor,
        @inject(ServiceIdentifier.HELMET) helmet: Helmet
    ) {
        // this.name = 'Samurai';
        this.weapon = weapon;
        this.shield = armor;
    }
    public start() {
        console.log(this.shield.wear());
    }
}

export {
    Ninja,
    Samurai
};
