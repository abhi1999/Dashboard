import uuid from 'uuid-v4';

export default class Database {
    public ClientId: string = "";
    public VersionId: string = "";
    public LastModified: string = "";
    public Id: string = uuid();
    public Name: string = "";
    public Active: boolean = true;
    public Selected: boolean = false;
    public HasErrors: boolean = false;
    public Connection: string = "";
    public Database: string = "";
    public Linkage: string = "";
    public Network: string = "";

    public constructor(init?: Partial<Database>) {
        Object.assign(this, init);
    }
}