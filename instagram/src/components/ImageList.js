import React from 'react';
import './ImageList.css';
import { connect } from 'react-redux';
import { fetchImages } from '../actions';

class ImageList extends React.Component {

  componentDidMount() {
    this.props.fetchImages();
  }

  renderList() {
    return this.props.images.map(image => {
      return (
        <div key={image.data[0].nasa_id}>
          <a>
            <img
              src={image.links[0].href}
              alt="placeholder"
              className="slideshow__image__img"
            />
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="insta">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { images: state.images };
};

export default connect(
  mapStateToProps,
  { fetchImages }
)(ImageList);
