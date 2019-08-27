import {injectable} from "inversify";
import IWeapon from '@/components/ioc/interface/IWeapon';

@injectable()
class Shuriken implements IWeapon {
    public name: string;
    public constructor() {
        this.name = 'Shuriken';
    }
}

class Katana implements IWeapon {
    public name: string;
    public constructor() {
        this.name = 'Katana';
    }
}

export {
    Shuriken,
    Katana
};
