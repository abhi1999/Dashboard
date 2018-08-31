import uuid from 'uuid-v4';

export default class WorkflowTask {
    public Id: string = uuid();
    public Name: string = "";
    public Status: string = "";
    public RunCount: number = 0;
    public LastRun: string = "";
    public Duration: string = "";
    public Fresh: boolean = false;
    public Event: string = "";
    public Type: number = 0;

    public constructor(init?: Partial<WorkflowTask>) {
        Object.assign(this, init);
    }
}