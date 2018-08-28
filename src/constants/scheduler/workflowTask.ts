export default class WorkflowTask
{
    public Id:string
    public Name:string
    public Status:string
    public RunCount:number
    public LastRun:string
    public Duration:string
    public Fresh:boolean
    public Event:string
    public Type:number

    public constructor(init?:Partial<WorkflowTask>) {
        Object.assign(this, init);
    }
}