import React from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions';

class ImageList extends React.Component {

  componentDidMount() {
    this.props.fetchImages();
  }

  renderList() {
    return this.props.images.map(image => {
      return (
        <div className="item" key={image.id}>
          <div className="content">
            <div className="image-list">
              <img
                src={image.links[0].href}
                alt="placeholder"
                className="slideshow__image__img"
              />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { images: state.images };
};

export default connect(
  mapStateToProps,
  { fetchImages }
)(ImageList);
