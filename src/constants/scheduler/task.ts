export default class Task {
    public ClientId:string
    public VersionId:string
    public LastModified:string
    public Id:string
    public Name:string
    public Active:boolean
    public Selected:boolean
    public HasErrors:boolean
    public ArgList:string
    public ClassName:string
    public Linkage:string
    public MailOnFailure:string
    public MailOnSuccess:string
    public MailServer:string
    public Method:string
    public ObjFile:string
    public ObjPath:string
    public Terminate:boolean
    public Critical:boolean
    public Timeout:number
    public WorkflowListItems:string

    public constructor(init?:Partial<Task>) {
        Object.assign(this, init);
    }
}