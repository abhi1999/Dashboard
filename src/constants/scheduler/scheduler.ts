import uuid from 'uuid-v4';

export default class Scheduler {
    public ClientId: string = "";
    public VersionId: string = "";
    public LastModified: string = "";
    public Id: string = uuid();
    public Name: string = "";
    public Active: boolean = true;
    public Selected: boolean = false;
    public HasErrors: boolean = false;
    public ExpiresAfter: string = "";
    public OccursOn: string = "";
    public StartsAtDate: Date = new Date();
    public StartsAtTime: Date = new Date();
    public StartsAt: Date = new Date();
    public StopsAtDate: Date = new Date();
    public StopsAtTime: Date = new Date();
    public StopsAt: Date = new Date();
    public Type: string = "";

    public constructor(init?: Partial<Scheduler>) {
        Object.assign(this, init);
    }
}