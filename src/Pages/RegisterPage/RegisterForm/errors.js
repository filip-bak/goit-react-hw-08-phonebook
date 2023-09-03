const errors = {
  name: {
    required: 'Name is required',
    invalid: 'Invalid name',
  },
  email: {
    required: 'Email is required',
    invalid: 'Invalid email',
  },
  password: {
    required: 'Password is required',
    length: 'Password must be longer than 7 characters.',
    confirm: "Password didn't match",
  },
};
export default errors;
