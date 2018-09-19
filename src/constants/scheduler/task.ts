import uuid from 'uuid-v4';

export default class Task {
    public ClientId: string = "";
    public VersionId: string = "";
    public LastModified: string = "";
    public Id: string = uuid();
    public Name: string = "";
    public Active: boolean = true;
    public Selected: boolean = false;
    public HasErrors: boolean = false;
    public ArgList: string = "";
    public ClassName: string = "";
    public Linkage: string = "";
    public MailOnFailure: string = "";
    public MailOnSuccess: string = "";
    public MailServer: string = "";
    public Method: string = "";
    public ObjFile: string = "";
    public ObjPath: string = "";
    public Terminate: boolean = false;
    public Critical: boolean = false;
    public Timeout: number = 0;
    public WorkflowListItems: string = "";

    public constructor(init?: Partial<Task>) {
        Object.assign(this, init);
    }
}