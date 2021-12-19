import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ConctactInfo from 'components/ContactInfo';

import { useEffect, useState } from 'react';
import TourInfo from 'components/TourInfo';


interface XolaExperienceArray {
    toursArray: [] | [any] | never[];
}


const ToursPage: React.FC = () => {

    const [toursList, setToursList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    // There was no elegant solution to 'graphing' the Xola sellers API over to graphql. 
    // Therefore here we're just fetching all of the tours at page load, 
    // then storing them in state, passing them into the tour cards via TourInfo component

    /**@todo: Implement a reducing operation to compose what is available at Gatsby's build time fetching-formatting Xola tours.. and what might have changed or be new at runtime when user visits using browser useEffect fetch below */

    // useEffect(() => {
    //     const fetchTours = async () => {
    //         try {
    //             const tours = await fetch(`${process.env.GATSBY_XOLA_SELLER_ENDPOINT}${process.env.GATSBY_XOLA_SELLER_ID}`, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'X-API-VERSION': '2017-06-10',
    //                     'X-API-KEY': `${process.env.GATSBY_XOLA_SELLER_API_KEY}`
    //                 }
    //             })
    //             return tours.json();
    //         }
    //         catch (error) {
    //             setErrorMsg('We had an issue retrieving the laterst tours, give us a call at 678-362-3415 for direct booking!')
    //             console.log('Error retrieving list of tours from Xola: ', error);
    //         }
    //     }
    //     fetchTours()
    //         .then(response => setToursList(response.data))
    //         .catch(error => setErrorMsg(error.message))
    // }, []);

    // console.log('Tours:  ', toursList)

    return (
        <Layout>
            <SEO title="Charters and Tours" />
            <TourInfo toursArray={[]} />
        </Layout>

        // <Layout>
        //     <SEO title="Charters and Tours" />
        //     {
        //         !toursList && <h1>Loading...</h1>
        //     }
        //     {
        //         errorMsg && <h1>{errorMsg}</h1>
        //     }
        //     {
        //         toursList && <TourInfo toursArray={toursList} />
        //     }

        //     <ConctactInfo />
        // </Layout>
    );
};

export default ToursPage;
