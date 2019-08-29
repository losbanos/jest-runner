import {Container} from 'inversify';
import 'reflect-metadata';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import IWeapon from '@/components/ioc/interface/IWeapon';
import IWarrior from '@/components/ioc/interface/IWarrior';
import {Ninja} from '@/components/ioc/model/Warriors';
import {Shuriken} from '@/components/ioc/model/Weapons';
import {Helmet, Glove, Armor} from '@/components/ioc/model/Shield';
import IShield from '@/components/ioc/interface/IShield';

const container = new Container();
container.bind<IWeapon>(ServiceIdentifier.WEAPON).to(Shuriken);
container.bind<IWarrior>(ServiceIdentifier.WARRIOR).to(Ninja);
container.bind<IShield>(ServiceIdentifier.HELMET).to(Helmet);
container.bind<IShield>(ServiceIdentifier.GLOVE).to(Glove);
container.bind<IShield>(ServiceIdentifier.ARMOR).to(Armor);

export default container;
