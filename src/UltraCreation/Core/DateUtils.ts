export namespace DateUtils
{
    export enum TWeekDay
    {
        Sunday                          = 0,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Firday,
        Saturday
    }

    export namespace Milliseconds
    {
        export namespace Per
        {
            export const Second         = 1000;
            export const Minute         = 60000;
            export const Hour           = 3600000;
            export const Day            = 86400000;
            export const Week           = 604800000;
        }
    }

    export namespace Seconds
    {
        export namespace Per
        {
            export const Minute         = 60;
            export const Hour           = 3600;
            export const Day            = 86400;
            export const Week           = 604800;
        }
    }

    export namespace Minutes
    {
        export namespace Per
        {
            export const Hour           = 60;
            export const Day            = 1440;
            export const Week           = 10080;
        }
    }

    export namespace Hours
    {
        export namespace Per
        {
            export const Day            = 24;
            export const Week           = 168;
        }
    }

    export function Now(): Date
    {
        return new Date();
    }

    export function Today(): Date
    {
        const dt = new Date();
        const year = dt.getFullYear();
        const mon = dt.getMonth();
        const day = dt.getDate();

        return new Date(year, mon, day);
    }

    const TimezoneOffset = new Date().getTimezoneOffset() * Milliseconds.Per.Minute;

    export function ToUTC(now: Date): Date
    {
        return new Date(now.getTime() + TimezoneOffset);
    }

    export function FromUTC(UTC: number | Date): Date
    {
        if (UTC instanceof Date)
            return new Date(UTC.getTime() - TimezoneOffset);
        else
            return new Date(UTC - TimezoneOffset);
    }

    export function FromISO8601(str: string): Date
    {
        // includes TimeZone designator
        if (str.match(/[Z\+\-]/))
            return new Date(str.replace(/\s/, 'T'));
        // otherwise is localtime
        else
            return FromUTC(new Date(str.replace(/\s/, 'T')));
    }

    export function FromIEEE(Double: number): Date
    {
        return new Date(Math.trunc(Double * 86400000));
    }

    export type TDatePart =
        'millisecond' | 'second' | 'minute' | 'hour' | 'day';

    export function Add(DT: Date, Value: number, Part: TDatePart  = 'millisecond'): Date
    {
        switch (Part)
        {
        case 'millisecond':
            return new Date(DT.getTime() + Value);
        case 'second':
            return new Date(DT.getTime() + Value * Milliseconds.Per.Second);
        case 'minute':
            return new Date(DT.getTime() + Value * Milliseconds.Per.Minute);
        case 'hour':
            return new Date(DT.getTime() + Value * Milliseconds.Per.Hour);
        case 'day':
            return new Date(DT.getTime() + Value * Milliseconds.Per.Day);
        }
    }

    export function Sub(DT: Date, Value: number, Part: TDatePart  = 'millisecond'): Date
    {
        return Add(DT, -Value, Part);
    }

    export function Diff(Left: Date, Right: Date, Part: TDatePart  = 'millisecond'): number
    {
        const Diff = Left.getTime() - Right.getTime();

        switch (Part)
        {
        case 'millisecond':
            return Diff;
        case 'second':
            return Math.trunc(Diff / Milliseconds.Per.Second);
        case 'minute':
            return Math.trunc(Diff / Milliseconds.Per.Minute);
        case 'hour':
            return Math.trunc(Diff / Milliseconds.Per.Hour);
        case 'day':
            return Math.trunc(Diff / Milliseconds.Per.Day);
        }
    }
}
