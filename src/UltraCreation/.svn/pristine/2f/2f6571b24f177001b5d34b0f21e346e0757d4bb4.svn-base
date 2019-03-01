import {Platform} from '../Core/Platform';
import {IPersistable, TPersistRule} from '../Core/Persistable';
import {ENotImplemented} from '../Core/Exception';

/* IStorage */

export interface IStorage
{
    Get(Key: string): Promise<string | Object>;
    Set(Key: string, Value: string | Object): Promise<void>;
    RemoveKey(Key: string): Promise<void>;
    ClearKeys(): Promise<number>;

    SaveObject(Obj: IPersistable, InsertOrUpdate?: boolean): Promise<void>;
    RemoveObject(Obj: IPersistable): Promise<void>;
}

/* IStorageEngine */

export interface IStorageEngine extends IStorage
{
    DebugTracing: boolean;
    StrictInsert: boolean;
}

declare global
{
/* extends StorageEngine to window global variable */

    let StorageEngine: IStorageEngine | undefined;

    interface Window
    {
        StorageEngine: IStorageEngine | undefined;
    }

    module NodeJS
    {
        interface Global
        {
            StorageEngine: IStorageEngine | undefined;
        }
    }
}

declare var global: any;

/* InitializeStorage */

export function InitializeStorage(Engine: IStorageEngine): IStorageEngine
{
    if (Platform.IsBrowser)
    {
        console.log('initialize StorageEngine as global variable & windows.StorageEngine');

        window.StorageEngine = Engine;
        StorageEngine = Engine;
    }

    if (Platform.IsNodeJS)
    {
        console.log('initialize StorageEngine as NodeJS global variable');
        global.StorageEngine = Engine;
    }

    return Engine;
}

/* TStorage */

export abstract class TStorage implements IStorage
{
    constructor()
    {
    }

/* Simple Key/Value Support */

    abstract Get(Key: string): Promise<string | Object>;
    abstract Set(Key: string, Value: string | Object): Promise<void>;
    abstract RemoveKey(Key: string): Promise<void>;
    abstract ClearKeys(): Promise<number>;

/* Persistable Object Support */

    async SaveObject(Obj: IPersistable): Promise<void>
    {
        const Rules = new Array<TPersistRule>();
        Obj.DefineRules(Rules);

        await Obj.BeforePersist();

        if (! Obj.IsEditing)
        {
            if (StorageEngine.StrictInsert)
            {
                await Obj.BeforeInsert();
                await this.InsertByRules(Rules, Obj);
                await Obj.AfterInsert();
            }
            else
            try
            {
                await Obj.BeforeInsert();
                await this.InsertByRules(Rules, Obj);
                await Obj.AfterInsert();
            }
            catch (e)
            {
                console.warn('SaveObject using INSERT failure, trying UPDATE');
                await Obj.BeforeUpdate();
                await this.UpdateByRules(Rules, Obj);
                await Obj.AfterUpdate();
                console.log('SaveObject using UPDATE successful.');
            }
        }
        else
        {
            await Obj.BeforeUpdate();
            await this.UpdateByRules(Rules, Obj);
            await Obj.AfterUpdate();
        }

        Obj.MergeChanges();
    }

    async RemoveObject(Obj: IPersistable): Promise<void>
    {
        const Rules = new Array<TPersistRule>();
        Obj.DefineRules(Rules);

        await Obj.BeforeDelete();
        await this.DeleteByRules(Rules, Obj);
        await Obj.AfterDelete();
    }

    protected InsertByRules(Rules: Array<TPersistRule>, Obj: IPersistable): Promise<void>
    {
        return Promise.reject(new ENotImplemented());
    }

    protected UpdateByRules(Rules: Array<TPersistRule>, Obj: IPersistable): Promise<void>
    {
        return Promise.reject(new ENotImplemented());
    }

    protected DeleteByRules(Rules: Array<TPersistRule>, Obj: IPersistable): Promise<void>
    {
        return Promise.reject(new ENotImplemented());
    }
}

/* TStorageEngine */

export abstract class TStorageEngine extends TStorage
{
    DebugTracing: boolean = false;
    StrictInsert: boolean = false;
}
