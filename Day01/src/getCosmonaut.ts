import { Cosmonaut, createCosmonaut }  from './createCosmonaut';
import * as data from './cosmonaut.json';

export function getCosmonaut(path: string): Cosmonaut {
    return createCosmonaut((<any>data).name, (<any>data).mission, (<any>data).country);
}