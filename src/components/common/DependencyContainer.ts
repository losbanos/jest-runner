import {Container} from 'inversify';
import 'reflect-metadata';
import getDecorators from 'inversify-inject-decorators';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import IWeapon from '@/components/ioc/interface/IWeapon';
import IWarrior from '@/components/ioc/interface/IWarrior';
import {Ninja, Samurai} from '@/components/ioc/model/Warriors';
import {Shuriken, Sword} from '@/components/ioc/model/Weapons';
import {Helmet, Glove, Armor} from '@/components/ioc/model/Shield';
import IShield from '@/components/ioc/interface/IShield';
import StarWarsService from '@/components/ioc/service/StarWarsService';
import RxjsService from "@/components/ioc/service/RxjsService";

const container = new Container();
container.bind<IWarrior>(ServiceIdentifier.NINJA).to(Ninja);
container.bind<IWarrior>(ServiceIdentifier.SAMURAI).to(Samurai);
container.bind<IWeapon>(ServiceIdentifier.SHURIKEN).to(Shuriken);
container.bind<IWeapon>(ServiceIdentifier.SWORD).to(Sword);
container.bind<IShield>(ServiceIdentifier.HELMET).to(Helmet);
container.bind<IShield>(ServiceIdentifier.GLOVE).to(Glove);
container.bind<IShield>(ServiceIdentifier.ARMOR).to(Armor);
container.bind<StarWarsService>(ServiceIdentifier.STARWARS).to(StarWarsService);
container.bind<RxjsService>(ServiceIdentifier.RXJSSERVICE).to(RxjsService);

const {lazyInject}: any = getDecorators(container);

export {container, lazyInject};
