import {TypeInfo} from './TypeInfo';
import {Endianness} from './Endian';

/** Uint8Array <--> Integers as BIG-Endian */
export namespace BytesConv
{
    export type TIntSize = 1 | 2 | 3 | 4 | 5 | 6;

    export function AsUint(IntSize: TIntSize, Buf: Uint8Array, Offset: number = 0,
        Endian = Endianness.HostEndian): number
    {
        let RetVal = 0;

        if (Endian === Endianness.BigEndian)
        {
            for (let I = 0; I < IntSize; I ++)
                RetVal = RetVal * 256 + Buf[Offset ++];
        }
        else
        {
            let Base = 1;
            for (let I = 0; I < IntSize; I ++)
            {
                RetVal = RetVal + Buf[Offset] * Base;
                Offset ++;
                Base *= 256;
            }
        }

        return RetVal;
    }

    export function AsInt(IntSize: TIntSize, Buf: Uint8Array, Offset: number = 0,
        Endian = Endianness.HostEndian): number
    {
        let RetVal = 0;
        let Base;
        let Signed: boolean;

        if (Endian === Endianness.BigEndian)
        {
            Base = 256;

            // sign at first Byte
            Signed = (Buf[Offset] & 0x80) !== 0;

            for (let I = 0; I < IntSize; I ++)
            {
                RetVal = RetVal * 256 + Buf[Offset ++];
                Base *= 256;
            }
        }
        else
        {
            Base = 1;

            for (let I = 0; I < IntSize; I ++)
            {
                RetVal = RetVal + Buf[Offset ++] * Base;
                Base *= 256;
            }

            // sign at last byte
            Signed = (Buf[Offset] & 0x80) !== 0;
        }

        if (Signed)
            return RetVal - Base;
        else
            return RetVal;
    }

    export function ToUint(v: number, IntSize: TIntSize, Buf: Uint8Array, Offset: number = 0,
        Endian = Endianness.HostEndian): void
    {
        if (Endian === Endianness.BigEndian)
        {
            for (let I = IntSize - 1; I !== 0; I --)
            {
                Buf[Offset + I] = v & 0xFF;
                v = Math.trunc(v / 256);
            }
        }
        else
        {
            for (let I = 0; I < IntSize; I ++)
            {
                Buf[Offset + I] = v & 0xFF;
                v = Math.trunc(v / 256);
            }
        }
    }

    export function ToInt(v: number, IntSize: TIntSize, Buf: Uint8Array, Offset: number = 0,
        Endian = Endianness.HostEndian): void
    {
        if (v < 0)
            ToUint(v + Math.pow(2, IntSize * 8), IntSize, Buf, Offset, Endian);
        else
            ToUint(v, IntSize, Buf, Offset, Endian);
    }
}

/* Integers / Bytes Array <--> HEX string */
export namespace HexConv
{
    export function IntToHex(v: number, Digit?: number): string
    {
        return ('0000000000000000' + v.toString(16).toUpperCase()).substr(-Digit);
    }

    export function BinToHex(Buf: Uint8Array, Count?: number): string
    {
        if (! TypeInfo.Assigned(Count))
            Count = Buf.byteLength;
        let RetVal = '';

        for (let I = 0; I < Count; I ++)
            RetVal += ('00' + Buf[I].toString(16).toUpperCase()).substr(-2);

        return RetVal;
    }

    export function HexToBin(str: string): Uint8Array
    {
        const Buf = new Uint8Array(str.length / 2);

        for (let i = 0; i < str.length / 2; i ++)
            Buf[i] = parseInt(str[i * 2], 16) * 16 + parseInt(str[i * 2 + 1], 16);

        return Buf;
    }
}
