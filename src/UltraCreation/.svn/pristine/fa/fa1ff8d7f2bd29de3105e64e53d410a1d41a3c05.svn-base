import {TypeInfo} from './TypeInfo';

/* IPersistable */

export interface IPersistable
{
    Ref?: any;

    readonly IsEditing: boolean;
    OldValue?: any;

    /**
     *  Create RestorePoint to OldValue
     *      Ref
     *      OldValue losts when Object was saved by Storage / RevertChanges() / MergeChanges()
     */
    Edit(): void;

    /**
     *  for Storage
     *  define Storage persist Rules
     */
    DefineRules(Rules: Array<TPersistRule>): void;

    /**
     *  Before persistent(Insert/Update)
     */
    BeforePersist(): Promise<void>;
    BeforeInsert(): Promise<void>;
    BeforeUpdate(): Promise<void>;
    BeforeDelete(): Promise<void>;

    AfterInsert(): Promise<void>;
    AfterUpdate(): Promise<void>;
    AfterDelete(): Promise<void>;

    /**
     *  Revert Changes to OldValue
     */
    RevertChanges(): void;
    /**
     *  Merge Changes
     */
    MergeChanges(): void;
}

/* TPersistRule */

export enum TPersistUpdateRule {WhereKeyOnly, WhereChanged, WhereAll}

export class TPersistRule
{
    constructor(Name: string, KeyProps: string[], Props: string[],
        UpdateRule: TPersistUpdateRule = TPersistUpdateRule.WhereKeyOnly)
    {
        this.Name = Name;
        this.KeyProps = KeyProps;
        this.Props = Props;
        this.UpdateRule = UpdateRule;

        Object.freeze(this);
    }

    Name: string;
    KeyProps: string[];
    Props: string[];
    UpdateRule: TPersistUpdateRule;
}

/* TAssignable */

export abstract class TAssignable
{
    Assign(src: any, merge: boolean = false): void
    {
        TAssignable.AssignProperties(this, src, merge);
        this.AfterAssignProperties();
    }

    protected AfterAssignProperties(): void
    {
        // nothing to do now
    }

    AssignTo(dst: any, merge: boolean = false): void
    {
        if (dst instanceof TAssignable)
            dst.Assign(this, merge);
        else
            TAssignable.AssignProperties(dst, this, merge);
    }

    static AssignProperties(dst: any, src: any, merge: boolean = false): void
    {
        for (const prop in src)
        {
            // at lease we need name match to copy to
            if (! merge)
            {
                if (! (prop in dst))
                    continue;
            }
            const PropValue = src[prop];

            if (TypeInfo.IsPrimitive(PropValue))
            {
                // todo: check dst[prop] type match?
                try
                {
                    dst[prop] = PropValue;
                }
                catch (e)
                {
                    // PropValue maybe comes from getter
                    // but dst[prop] may not have setter, this can not be decided
                }
                continue;
            }

            if (PropValue instanceof Date)
            {
                dst[prop] = new Date(PropValue);
                continue;
            }

            // todo: is any other types need to Assign? before Object

            if (TypeInfo.IsObject(PropValue))
            {
                if (TypeInfo.IsNull(dst[prop]))
                    dst[prop] = new Object();

                if (TypeInfo.Assigned(dst[prop]))
                    Object.assign(dst[prop], PropValue);

                continue;
            }
        }
    }
}

/* TPersistable */

export abstract class TPersistable extends TAssignable implements IPersistable
{
    get IsReadOnly(): boolean
    {
        return Object.isFrozen(this);
    }

/* IPersistable */

    Edit(): this
    {
        if (! TypeInfo.Assigned(this.OldValue))
        {
            this.OldValue = new Object();
            Object.assign(this.OldValue, this);
            this.OldValue.OldValue = undefined;
        }

        return this;
    }

    get IsEditing(): boolean
    {
        return TypeInfo.Assigned(this.OldValue);
    }

    DefinePropRules(Rules: Array<TPersistRule>): void
    {
        // nothing to do
    }

    DefineRules(Rules: Array<TPersistRule>): void
    {
        this.DefinePropRules(Rules);

        if (Rules.length > 0)
            console.warn('DefinePropRules is Deprecated use DefineRules instead.');
    }

    BeforePersist(): Promise<void>
    {
        return Promise.resolve();
    }

    BeforeInsert(): Promise<void>
    {
        return Promise.resolve();
    }

    BeforeUpdate(): Promise<void>
    {
        return Promise.resolve();
    }

    BeforeDelete(): Promise<void>
    {
        return Promise.resolve();
    }

    AfterInsert(): Promise<void>
    {
        return Promise.resolve();
    }

    AfterUpdate(): Promise<void>
    {
        return Promise.resolve();
    }

    AfterDelete(): Promise<void>
    {
        return Promise.resolve();
    }

    RevertChanges(): void
    {
        if (TypeInfo.Assigned(this.OldValue))
            this.Assign(this.OldValue);

        this.OldValue = undefined;
    }

    MergeChanges(): void
    {
        this.OldValue = undefined;
    }

    OldValue: any;
}

export class TRefPersistable<TRef> extends TPersistable
{
    constructor(public Ref?: TRef)
    {
        super();
    }

    Edit(): this
    {
        if (TypeInfo.Assigned(this.Ref))
        {
            this._IsEditing = true;
            return this;
        }
        else
            return super.Edit();
    }

    get IsEditing(): boolean
    {
        return this._IsEditing || TypeInfo.Assigned(this.OldValue); // super.IsEditing;
    }

    RevertChanges(): void
    {
        if (this._IsEditing)
        {
            this._IsEditing = false;
            this.OldValue = undefined;
        }
        else
            return super.RevertChanges();
    }

    MergeChanges(): void
    {
        this._IsEditing = false;
        super.MergeChanges();
    }

    private _IsEditing = false;
}
