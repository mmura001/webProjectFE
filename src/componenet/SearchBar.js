import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'

function SearchBar({placeholder,data}) {
  return (
    <div>
    <div className="search">
        <div className="searchInput">
            <input type="text" placeholder={placeholder} />
                <div className="searchIcon">
                    {/* <SearchIcon/> */}
                </div>
        </div>
    </div>
    </div>
  )
}

export default SearchBar
