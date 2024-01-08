const functionObj: { [key: string]: () => void } = {
  doAfterChangeGame: () => {
    console.log('Hello!');
  },
};

export { functionObj };
