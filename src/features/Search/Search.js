import { useSelector, useDispatch } from "react-redux";

import { changeActiveSearch } from "./searchSlice";

export const SearchBar = () => {
    const dispatch = useDispatch()

    const searchBarValue = useSelector(state => state.search)

    const onTextChange= (e) => {
        dispatch(changeActiveSearch(e.target.value))
    }

    return  (
        <input className='search-bar'
        value={searchBarValue}
        onChange={onTextChange}
        />
    )
}