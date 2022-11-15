import React from "react";

import "./SearchBar.css";

export function SearchBar({ placeholder, data }) {
  return (
    <div>
      <div className="search">
        <div className="searchInput">
          <input type="text" placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
}

{
  /* <Box sx={{ '& > :not(style)': { m: 1 } }}> */
}
{
  /* <Fab variant="extended" size="small" color="primary" aria-label="add">
                <SearchBar sx={{ mr: 1 }} />
                          Search
                      </Fab>
                  </Box> */
}
{
  /* <div className="searchIcon">
                <ActionButton>Edit</ActionButton>
                </div> */
}
