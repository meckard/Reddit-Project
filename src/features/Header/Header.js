import './Header.css'
import { TbChristmasTree } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { changeSubreddit } from '../RedditJSON/redditSlice'
import { useDispatch } from 'react-redux'
import { SearchBar } from '../Search/Search'

export const Header = () => {
    const dispatch = useDispatch()

    return (
        <div className='header'>
            <h1><Link to='/' onClick={() => dispatch(changeSubreddit('/hot'))}>Christmas Reddit<TbChristmasTree/></Link></h1>
            <SearchBar/>
        </div>
    )
}