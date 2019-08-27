import {Container} from "inversify";
import 'reflect-metadata';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import IWeapon from '@/components/ioc/interface/IWeapon';
import IWarrior from '@/components/ioc/interface/IWarrior';
import {Ninja} from "@/components/ioc/model/Warriors";
import {Shuriken} from '@/components/ioc/model/Weapons';

const container = new Container();
container.bind<IWeapon>(ServiceIdentifier.WEAPON).to(Shuriken);
container.bind<IWarrior>(ServiceIdentifier.WARRIOR).to(Ninja);

export default container;


