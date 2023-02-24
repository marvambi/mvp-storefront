// app/utils/validators.server.ts

export const validateEmail = (email: string): string | undefined => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.length || !validRegex.test(email)) {
    return "Please enter a valid email address"
  }
}

export const validatePassword = (password: string): string | undefined => {
  if (password.length < 6) {
    return "Please enter a password that is at least 5 characters long"
  }
}

export const validateUserName = (username: string): string | undefined => {
  if (!username.length) return `Please enter a username`
}

export const validateRole = (role: string): string | undefined => {
  if (!role.length) return `Please select a role`
}