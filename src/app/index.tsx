type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: 'VIDEOS' | 'PLAYLISTS' | 'BLOG_POSTS';
};

function App() {
  return (
    <div>
      <header>
        <h1>SearchLion</h1>
      </header>
    </div>
  );
}

export default App;
