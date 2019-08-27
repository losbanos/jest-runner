import {injectable} from 'inversify';
import IWeapon from '../interface/IWeapon';

@injectable()
class Shuriken implements IWeapon {
    public name: string;
    public constructor() {
        this.name = 'Shuriken';
    }

}

@injectable()
class Katana implements IWeapon {
    public name: string;
    public constructor() {
        this.name = 'Katana';
    }
}

export {
    Shuriken,
    Katana
}
