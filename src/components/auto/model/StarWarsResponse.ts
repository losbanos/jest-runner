export interface StarWarsFilm{
    title?: string;
    episode_id?: string;
    opening_crawl?: string;
    director?: string;
    producer?: string;
    release_date?: string;
    characters?: Array<string>;
    planets?: Array<string>;
    starships?: Array<string>;
    vehicles?: Array<string>;
    species?: Array<string>;
    created?: string;
    edited?: string;
    url?: string;
}
export interface StarWarsPeople {
    name?: string;
    height?: string;
    mass?: string;
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
    birth_year?: string;
    gender?: string;
    homeworld?: string;
    films?: Array<string>;
    species?: Array<string>;
    vehicles?: Array<string>;
    starships?: Array<string>;
    created?: string;
    edited?: string;
    url?: string;
}