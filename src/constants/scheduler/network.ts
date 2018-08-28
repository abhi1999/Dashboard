export default class Network {
    public ClientId:string
    public VersionId:string
    public LastModified:string
    public Id:string
    public Name:string
    public Active:boolean
    public Selected:boolean
    public HasErrors:boolean
    public Password:string
    public Port:string
    public Server:string
    public Username:string

    public constructor(init?:Partial<Network>) {
        Object.assign(this, init);
    }
}