import uuid from 'uuid-v4';

export default class Folder {
    public ClientId: string = "";
    public VersionId: string = "";
    public LastModified: string = "";
    public Id: string = uuid();
    public Name: string = "";
    public Active: boolean = true;
    public Selected: boolean = false;
    public HasErrors: boolean = false;
    public Network: string = "";
    public Path: string = "";
    public Remote: boolean = false;

    public constructor(init?: Partial<Folder>) {
        Object.assign(this, init);
    }
}