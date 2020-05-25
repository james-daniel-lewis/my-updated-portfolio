import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import HeaderStyles from '../styles/header.module.scss'



const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)



    return (
        <header className={HeaderStyles.header}>
            <Link className={HeaderStyles.title} to="/">
                <h1>{data.site.siteMetadata.title}</h1>
            </Link>
            <nav >
                <ul className={HeaderStyles.navList}>
                    <li>
                        <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavLink} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavLink} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavLink} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavLink} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header