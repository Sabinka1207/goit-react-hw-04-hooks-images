import css from "./Searchbar.module.css"
    
export const Searchbar = ({ onClick }) => {
    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={e => {
                e.preventDefault()
                onClick(e.target.elements.request.value.trim())

            }}>
            <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
            className={css.SearchFormInput}
            name="request"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </form>
        </header>
    )
}

