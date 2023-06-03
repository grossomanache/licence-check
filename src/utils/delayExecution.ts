const delayExecution = (ms: number) => {
  return new Promise((r) => setTimeout(r, ms));
};

export default delayExecution;
