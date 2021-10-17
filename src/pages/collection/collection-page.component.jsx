import React from "react";
import { connect } from "react-redux";
import { selectCollectionFromId } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection-page.styles.scss";

const CollectionPage = ({ collection:{title, items} }) => {
  console.log(items);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionFromId(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
