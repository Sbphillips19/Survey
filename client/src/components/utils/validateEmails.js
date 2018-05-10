// because it is returning a function
// thats why file starts with a lowercase letter

// get regex from http://emailregex.com/
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    // backticks because template string
    return `These emails are invalid: ${invalidEmails}`;
  }

  // if no invalid emails return nothing/ null
  return;
};
