export default class Scheduler {
    public ClientId:string
    public VersionId:string
    public LastModified:string
    public Id:string
    public Name:string
    public Active:boolean
    public Selected:boolean
    public HasErrors:boolean
    public ExpiresAfter: string;
    public OccursOn: string;
    public StartsAtDate: Date;
    public StartsAtTime: Date;
    public StartsAt: Date;
    public StopsAtDate: Date;
    public StopsAtTime: Date;
    public StopsAt: Date;
    public Type: string;

    public constructor(init?:Partial<Scheduler>) {
        Object.assign(this, init);
    }
}