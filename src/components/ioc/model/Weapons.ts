import {injectable} from 'inversify';
import IWeapon from '@/components/ioc/interface/IWeapon';

@injectable()
class Shuriken implements IWeapon {
    public name: string;
    public constructor() {
        this.name = 'Shuriken';
    }
    public use(): void {
        console.log(`using ${this.name}`);
    }
    public abandon(): void {
        console.log(`abandon ${this.name}`);
    }
}

@injectable()
class Katana implements IWeapon {
    public name: string;
    public constructor() {
        this.name = 'Katana';
    }
    public use(): void {
        console.log(`using ${this.name}`);
    }
    public abandon(): void {
        console.log(`abandon ${this.name}`);
    }
}
@injectable()
class Sword implements IWeapon {
    public name: string;
    public constructor() {
        this.name = 'Sword';
    }
    public use(): void {
        console.log(`using ${this.name}`);
    }
    public abandon(): void {
        console.log(`abandon ${this.name}`);
    }
}
export {
    Shuriken,
    Katana,
    Sword
};
