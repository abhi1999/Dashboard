import uuid from 'uuid-v4';

export default class Workflow {
    public ClientId: string = "";
    public VersionId: string = "";
    public LastModified: string = "";
    public Id: string = uuid();
    public Name: string = "";
    public Active: boolean = true;
    public Selected: boolean = false;
    public HasErrors: boolean = false;
    public Argument: string = "";
    public Broadcast: boolean = false;
    public Cascade: boolean = true;
    public Filter: string = "";
    public Resource: string = "";
    public TaskList: string = "";
    public TaskListItems: string = "";
    public Type: string = "";

    public constructor(init?: Partial<Workflow>) {
        Object.assign(this, init);
    }
}