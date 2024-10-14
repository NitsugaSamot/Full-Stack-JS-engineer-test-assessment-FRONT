export interface Border {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
  }
  
  export interface PopulationData {
    year: number;
    value: number;
  }
  
  export interface Country {
    name: string;
    countryCode: string;
    flagUrl: string;
    borders: Border[];
    populationData: PopulationData[];
  }
  
  export type SearchResults = Country[];