export const asc = (prop) => (a, b) => a[prop].localeCompare(b[prop]);

export const desc = (prop) => (a, b) => -a[prop].localeCompare(b[prop]);
