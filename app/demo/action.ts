"use server";

export const action = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  return Math.random().toString();
};
