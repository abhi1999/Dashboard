export default class Workflow {
    public ClientId:string
    public VersionId:string
    public LastModified:string
    public Id:string
    public Name:string
    public Active:boolean
    public Selected:boolean
    public HasErrors:boolean
    public Argument:string
    public Broadcast:boolean
    public Cascade:boolean
    public Filter:string
    public Resource:string
    public TaskList:string
    public TaskListItems:string
    public Type:string

    public constructor(init?:Partial<Workflow>) {
        Object.assign(this, init);
    }
}