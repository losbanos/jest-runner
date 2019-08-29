import IWeapon from '@/components/ioc/interface/IWeapon';
import IShield from '@/components/ioc/interface/IShield';

export default interface IWarrior {
    name: string;
    weapon: IWeapon;
    shield: IShield;
}
