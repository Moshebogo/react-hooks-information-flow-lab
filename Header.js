

function Header ({isDarkMode, setIsDarkMode}) {

    function onDarkModeClick() {
        setIsDarkMode(isDarkMode => !isDarkMode);
      }

    return (
     <div className={"App " + (isDarkMode ? "dark" : "light")}>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
                </button>
            </header>
          <ShoppingList items={itemData} />
     </div>
    )
}

export default Header