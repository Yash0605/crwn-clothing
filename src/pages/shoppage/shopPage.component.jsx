import React, { Component } from "react";
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from './shopPage.data.js';

import './shopPage.styles.scss';

class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className=''>
                {collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key = {id} {...otherCollectionProps}></CollectionPreview>)}
            </div>
        )
    }
}

export default ShopPage;