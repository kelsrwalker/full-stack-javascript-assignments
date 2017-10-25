export const greeting = 'Hello World';

export const characterAt = greeting.charAt(3);

export const greetingArray = greeting.split(" ");

const begins = (str, char) => {
  return str[0] === char
};

const beginsInsensitive = (str, char) => {
  return str[].toLowerCase() === char.toLowerCase()
};
