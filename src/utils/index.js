/* compare1 arg */
export function getUniqueEvent(compareLocal, compareDb) {
  return (
    compareLocal.id == compareDb.id && compareLocal.title == compareDb.title
  );
}
