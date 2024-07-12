export const getSearchTermFromLocalStorage = (): string => {
  return localStorage.getItem('searchTerm') ?? '';
};

export const saveSearchTermToLocalStorage = (searchTerm: string): void => {
  localStorage.setItem('searchTerm', searchTerm.trim());
};
