export default class Database {
    public ClientId:string
    public VersionId:string
    public LastModified:string
    public Id:string
    public Name:string
    public Active:boolean
    public Selected:boolean
    public HasErrors:boolean
    public Connection:string
    public Database:string
    public Linkage:string
    public Network:string

    public constructor(init?:Partial<Database>) {
        Object.assign(this, init);
    }
}