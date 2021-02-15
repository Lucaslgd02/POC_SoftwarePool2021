export interface Cosmonaut {
    name: string;
    mission: string;
    country: string;
}

export function createCosmonaut(name: string, mission: string, country: string): Cosmonaut {
    let cosm: Cosmonaut = {name, mission, country};
    return cosm;
}