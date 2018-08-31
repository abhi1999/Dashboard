import uuid from 'uuid-v4';

export default class Network {
    public ClientId: string = " ";
    public VersionId: string = "";
    public LastModified: string = "";
    public Id: string = uuid();
    public Name: string = "";
    public Active: boolean = true;
    public Selected: boolean = false;
    public HasErrors: boolean = false;
    public Password: string = "";
    public Port: string = "";
    public Server: string = "";
    public Username: string = "";

    public constructor(init?: Partial<Network>) {
        Object.assign(this, init);
    }
}