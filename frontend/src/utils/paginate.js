export function paginate(pageNumber, itemsPerPage, data) {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const newData = data.slice(startIndex, endIndex);

  return { newData, totalPages };
}
