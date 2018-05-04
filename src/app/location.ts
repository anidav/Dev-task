export interface Location {
    heading: string;
    address: string;
    area: number;
    points: {
        latitude: number,
        longitude: number,
    };
}