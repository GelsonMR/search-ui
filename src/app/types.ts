export type Category = 'VIDEOS' | 'PLAYLISTS' | 'BLOG_POSTS';

export const CategoryDisplay: Record<Category, string> = {
  VIDEOS: 'Video',
  PLAYLISTS: 'Playlist',
  BLOG_POSTS: 'Blog post',
};

export type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: Category;
};
