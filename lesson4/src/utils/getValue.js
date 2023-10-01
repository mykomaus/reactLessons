export const getValue = (id, prop, data = []) => {
  return data.find((item) => item.id === id)?.[prop];
};
