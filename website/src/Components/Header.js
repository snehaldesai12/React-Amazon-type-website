import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { SlRefresh } from 'react-icons/sl'
import { BsSuitHeart } from 'react-icons/bs'
import { BsPerson } from 'react-icons/bs'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { AiOutlineShop } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
    return (
        <>
            <header className="header1tag">
                <div className="container">
                    <div className="row header1row">
                        <div className="col-6 col1">
                            <p className="">Free shipping above 100$</p>
                        </div>

                        <div className="col-6 col2">
                            <p className="">
                                Contact: <a href='tel: +91 9876789564'>+91 9876789564</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header2tag" >
                <div className="container">
                    <div className="header2row">
                        <div className="col-6 col11">
                            <p className="col11txt">Digital</p>
                        </div>

                        <div className="col12">
                            <div className="col12txt">
                                <input className='searchinp' type="text" name="search" placeholder="Search.." />
                                <BiSearch className='searchiconclass' size={30} />
                            </div>
                        </div>

                        <div className="col-6 col13">
                            <Link className='iconplustxt'>
                                <span className='forpadding'><SlRefresh size={30} /></span>
                                <span className='forpadding'>Compare <br />Products</span>
                            </Link>

                            <Link className='iconplustxt'>
                                <span className='forpadding'><BsSuitHeart size={30} /></span>
                                <span className='forpadding'> Favorite <br />Wishlist </span>
                            </Link>

                            <Link className='iconplustxt'>
                                <span className='forpadding'><BsPerson size={30} /></span>
                                <span className='forpadding'> Log In <br />My Account </span>
                            </Link>

                            <Link className='iconplustxt'>
                                <span className='forpadding'><GiShoppingCart size={30} /></span>
                                <span className='forpadding'>Links</span>

                            </Link>

                        </div>
                    </div>
                </div>
            </header>

            <header className="header3tag">
                <div className="container">
                    <div className="header3row">
                        <div className='col111'>
                            <div className='iconplustxt'>
                                <span className='forpadding'><AiOutlineShop size={20} /></span>
                                <span className='dropbtnspan'>
                                    <div className='dropdown'>
                                        <button className='dropbtn'>SHOP CATEGORIES
                                            <IoIosArrowDown style={{ marginLeft: 13 }} />
                                        </button>
                                        <div className="dropdown-content">
                                            <Link>Link 1</Link>
                                            <Link >Link 2</Link>
                                            <Link >Link 3</Link>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div className='col112'>

                            <Link className='categoriesspace'>HOME</Link>
                            <Link className='categoriesspace'>OUR STORE</Link>
                            <Link className='categoriesspace'>BLOGS</Link>
                            <Link className='categoriesspace'>CONTACT</Link>

                        </div>

                    </div>
                </div>
            </header>
        </>

    )
}

export default Header
