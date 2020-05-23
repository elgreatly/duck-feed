export class DuckFeedMoel {
    fedTime: string;
    food: string;
    place: string;
    numberOfDucks: number;
    foodType: string;
    foodWeight: string;
    isScheduled: boolean;

    constructor(init?: Partial<DuckFeedMoel>) {
        Object.assign(this, init);
    }
}
