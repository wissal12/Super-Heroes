import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { SearchInputContainer, SearchBarContainer } from "./SearchInput.style";
import CloseIcon from "@mui/icons-material/Close";

const SearchInput = ({ onChange, onClear }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchInputContainer>
      <SearchBarContainer>
        <TextField
          label="Search"
          value={searchValue}
          fullWidth
          InputProps={{
            endAdornment: searchValue && (
              <InputAdornment style={{ cursor: "pointer" }} position="end">
                <CloseIcon
                  onClick={() => {
                    onClear();
                    setSearchValue("");
                  }}
                />
              </InputAdornment>
            ),
          }}
          onChange={(evt) => {
            const newValue = evt.target.value;
            onChange(newValue);
            setSearchValue(newValue);
          }}
        />
      </SearchBarContainer>
    </SearchInputContainer>
  );
};

export default SearchInput;
