type SearchFormProps = {
  isSearchOpen: boolean
  searchQuery: string
  setSearchQuery: (query: string) => void
  toggleSearch: () => void
  handleSearch: (e: React.FormEvent) => void
}

const SearchForm = ({
  isSearchOpen,
  searchQuery,
  setSearchQuery,
  toggleSearch,
  handleSearch,
}: SearchFormProps) => {
  return (
    isSearchOpen && (
      <form onSubmit={handleSearch} className="flex items-center gap-2 animate-fade-in">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
          className="py-1 px-3 border rounded-lg transition-all duration-300 w-48 focus:w-64 focus:outline-blue-500 text-black"
          autoFocus
        />
        <button
          type="button"
          onClick={toggleSearch}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Закрыть"
        >
          ✕
        </button>
      </form>
    )
  )
}

export default SearchForm