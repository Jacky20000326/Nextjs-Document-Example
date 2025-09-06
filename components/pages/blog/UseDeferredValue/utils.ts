type SearchResultType = {
  id: number;
  title: string;
  body: string;
};

const cache = new Map<string, Promise<SearchResultType[]>>();

export const getPost = (search: string) => {
  if (!cache.has(search)) {
    cache.set(
      search,
      fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`).then(
        (res) => res.json()
      )
    );
  }
  return cache.get(search)!;
};
