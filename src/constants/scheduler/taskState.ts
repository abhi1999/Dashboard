export default class TaskState {
    public TaskId:string
    public TaskCommand:string
    public CurrentState:string

    public constructor(init?:Partial<TaskState>) {
        Object.assign(this, init);
    }
}