export type Category = 'VIDEOS' | 'PLAYLISTS' | 'BLOG_POSTS';

export type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: Category;
};
