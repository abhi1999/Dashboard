export enum enumTransformationUpdateStatus {Newer, Same, NotFound}
export enum enumTransformationType{Map, Loop, Token}

export interface IMapSetting {
    MapName: string;
    Status: enumTransformationUpdateStatus;
    Type: enumTransformationType;
}

export class MapSetting implements IMapSetting {
    public MapName: string = "";
    public Status: enumTransformationUpdateStatus;
    public Type: enumTransformationType;

    public constructor(init?:Partial<MapSetting>) {
        Object.assign(this, init);
    }
}
