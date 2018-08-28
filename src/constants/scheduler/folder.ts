export default class Folder {
    public ClientId:string
    public VersionId:string
    public LastModified:string
    public Id:string
    public Name:string
    public Active:boolean
    public Selected:boolean
    public HasErrors:boolean
    public Network:string
    public Path:string
    public Remote:boolean

    public constructor(init?:Partial<Folder>) {
        Object.assign(this, init);
    }
}