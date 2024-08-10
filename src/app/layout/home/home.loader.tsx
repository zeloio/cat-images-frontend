const env = import.meta.env;

export async function HomeLayoutLoader() {
  await delay(0);

  return true;
}

function delay(t: number) {
  return new Promise((resolve) => setTimeout(resolve, t));
}
