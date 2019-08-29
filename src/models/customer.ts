import Address from './Address';

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
}

export default Customer;
