type SearchButtonProps = {
  isSearchOpen: boolean
  toggleSearch: () => void
}

const SearchButton = ({ isSearchOpen, toggleSearch }: SearchButtonProps) => {
  return (
    <button
      onClick={toggleSearch}
      className="text-gray-700 hover:text-blue-600 transition-colors"
      aria-label="Поиск"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    </button>
  )
}

export default SearchButton