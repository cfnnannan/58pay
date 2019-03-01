/**
 *  TLuid
 *      Locally Unique Identifier should be unique on this computer
 */
import {RandomSource} from './Random';
import {TBase64Encoding} from '../Encoding/Base64';

export class TLuid
{
    static Generate(): string
    {
        return new TLuid().toString();
    }

    constructor()
    {
        const ary = new Uint8Array(12);
        const x = new Uint32Array(ary.buffer, 0, 1);

        const dt = new Date();

        // 4294967296 / 86400000 = 49.7 days loop
        x[0] = dt.getTime();
        // year & 0x00FF
        ary[4] = dt.getFullYear();
        // year mixed month
        ary[5] = ((dt.getFullYear() & 0xFF00) >> 4) | dt.getMonth();
        // 7 random bytes
        RandomSource.Fill(ary, 5, 7);

        // interleave values
        [ary[0], ary[2], ary[4]] = [ary[6], ary[8], ary[10]];

        this.Value = ary;
    }

    toString(): string
    {
        // 16 character
        return TBase64Encoding.EncodeToString(this.Value);
    }

    Value: Uint8Array;
}
