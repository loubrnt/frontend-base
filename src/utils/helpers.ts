export const capitalize = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getGreeting = () => {
  const greetings = ["Welcome", "Hello", "Bonjour", "Hey there"];
  return greetings[Math.floor(Math.random() * greetings.length)];
};