import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {

    return (
        <Layout>
            <Head title="home"/>
            <h1>Hello.</h1>
            <h2>I'm james, a full-stack developer living in beautiful bridgend.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
            <p>About me <Link to="/about">About me.</Link></p>
            <p>About me <a href="https://instagram.com">my insta me.</a></p>
        </Layout>
    )
}

export default IndexPage