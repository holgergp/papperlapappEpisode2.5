export const log = (...all) => {
    const now = new Date();
    console.log(
      `${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`,
      ...all
    );
  };
  