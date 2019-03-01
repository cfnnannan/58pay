// import {Observable} from 'rxjs/Observable';
// import {Subject} from 'rxjs/Subject';
// import {TPersistable} from './Persistable';

export enum TScheduleDensity
{
    Once,
    Secondly,
    Hourly,
    Weekly,
    Monthly,
}

export type TDayHour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
export type TDayHours = Set<TDayHour>;
export type TWeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type TWeekDays = Set<TWeekDay>;

export class TSchedule
{
    constructor(Density: TScheduleDensity, Interval: number, Offset: number, Startting?: Date)
    {
        this.Density = Density;
        this.Interval = Interval;
        this.Offset = Offset;

        this.Startting = Startting;
    }

    readonly Density: TScheduleDensity;
    /**
     *  switch (Density)
     *      Once:       Interval = 0, Offset as TIMESTAMP
     *      Secondly:   Interval = Second, Base On 00:00, Offset = 0
     */
    readonly Interval: number;
    readonly Offset: number;

    readonly Startting?: Date;

    get LastExecute(): Date
    {
        return this._LastExecute;
    }

    private _LastExecute: Date = new Date(0);
}

/* TScheduler */

export class TScheduler
{
    constructor()
    {
    }

    StartInterval(Interval: number): void
    {

    }

    StartHourly(DayHours: Set<TDayHour>, Offset: number = 0)
    {

    }

    StartDaily(WeekDays: Set<TWeekDay>, Offset: number = 0)
    {
    }

    Start(Schedule: TSchedule): TSchedule
    {
        return Schedule;
    }

    protected Execute(): void
    {
        // Observable.interval(1000);
    }
}
