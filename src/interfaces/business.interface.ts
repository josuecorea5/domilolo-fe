export interface Business {
  id: string;
  name: string;
  description: string;
  address: string;
  website: string;
  image: string;
  contacts: Contact[];
  category: Category;
}

interface Category {
  id: string;
  name: string;
}

interface Contact {
  phoneNumber: string;
}
