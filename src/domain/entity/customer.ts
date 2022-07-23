import Address from "./address";

export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    isActive(): boolean {
        return this._active;
    }

    get address(): Address {
        return this._address;
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required.");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required.");
        }
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is required to activate a customer.");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    get id(): string {
        return this._id;
    }

    changeAddress(address: Address) {
        this._address = address;
    }
}