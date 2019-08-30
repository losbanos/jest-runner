export default interface IWeapon {
    name: string;
    use: () => void;
    abandon: () => void;
};
