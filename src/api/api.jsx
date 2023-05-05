
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const simulateAPI = async () => {
  await sleep(2000);
  return "responded";
};
