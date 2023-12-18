import readlineSync from 'readline-sync';

export default (question) => {
  const name = readlineSync.question(question);
  return name;
};
