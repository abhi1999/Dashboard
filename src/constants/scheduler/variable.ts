import uuid from 'uuid-v4';

export default class Variable {
    public ClientId: string = "";
    public VersionId: string = "";
    public LastModified: string = "";
    public Id: string = uuid();
    public Name: string = "";
    public Active: boolean = true;
    public Selected: boolean = false;
    public HasErrors: boolean = false;
    public Init: string = "";
    public Type: string = "";

    public constructor(init?: Partial<Variable>) {
        Object.assign(this, init);
    }
}