import {injectable, inject} from "inversify";
import IWarrior from '@/components/ioc/interface/IWarrior';
import IWeapon from "@/components/ioc/interface/IWeapon";
import ServiceIdentifier from "@/components/common/ServiceIdentifier";

@injectable()
class Ninja implements IWarrior {
    public name: string;
    public weapon: IWeapon;
    public constructor(
        @inject(ServiceIdentifier.WEAPON) weapon: IWeapon
    ) {
        this.name = 'Ninja';
        this.weapon = weapon;
    }
}

@injectable()
class Samuri implements IWarrior {
    public name: string;
    public weapon: IWeapon;

    public constructor(
        @inject(ServiceIdentifier.WEAPON) weapon: IWeapon
    ) {
        this.name = 'Samuri';
        this.weapon = weapon;
    }
}

export {
    Ninja,
    Samuri
};
