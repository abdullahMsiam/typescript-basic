const createPromise = (): Promise<String> => {
  return new Promise<String>((resolve, reject) => {
    const data = "I am find something";
    if (data) {
      resolve(data);
    } else {
      reject("failed to get data");
    }
  });
};

const showPromise = async (): Promise<String> => {
  const data = await createPromise();
  console.log(data);
  return data;
};

showPromise();
