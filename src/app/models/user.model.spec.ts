import { User } from './user.model';

let userMock = {
  name: "UserTester",
  phone: "999999999",
  email: "emailtester@gmail.com"
}

describe('User', () => {

  it('should create an instance', () => {
    expect(new User(userMock)).toBeTruthy();
  });


});
