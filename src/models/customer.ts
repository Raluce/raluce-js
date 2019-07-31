import { isEmpty, isEmail, isMobilePhone } from 'validator';

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

class CustomerFactory {
  public static Create(firstName: string, lastName: string, email: string, phone: string): Customer | null {
    var isValid = isEmpty(firstName) && isEmpty(lastName) && isEmail(email) && isMobilePhone(phone, "en-US");
    if (!isValid) return null;

    return <Customer> {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone
    };
  }
}

export default CustomerFactory;
