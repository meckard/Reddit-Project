import './Header.css'
import { TbChristmasTree } from 'react-icons/tb'

export default function Header () {
    return (
        <div className='header'>
            <h1>Christmas Reddit <TbChristmasTree/></h1>
            <input type='text' placeholder="Search"></input>
        </div>
    )
}