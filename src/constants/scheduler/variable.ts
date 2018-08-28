export default class Variable {
    public ClientId:string
    public VersionId:string
    public LastModified:string
    public Id:string
    public Name:string
    public Active:boolean
    public Selected:boolean
    public HasErrors:boolean
    public Init:string
    public Type:string

    public constructor(init?:Partial<Variable>) {
        Object.assign(this, init);
    }
}