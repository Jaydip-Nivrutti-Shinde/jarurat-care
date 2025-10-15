export interface Patient {
  id: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  cell: string;
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
  };
  gender: string;
  nat: string;
}

export interface ApiResponse {
  results: Patient[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
