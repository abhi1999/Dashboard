export default class ServiceState {
    public ControlCommand:string
    public CurrentState:string
    public AdminTaskRunCount:number
    public ClientId:string
    public LastLoadedServer:string
    public LastModifiedServer:string
    public LastModifiedClient:string
    public HashValue:string

    public constructor(init?:Partial<ServiceState>) {
        Object.assign(this, init);
    }
}