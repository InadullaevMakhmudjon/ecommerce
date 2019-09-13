import React, { Component } from 'react';
import ItemList from '../../components/home/ItemList';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
          {
            title: 'Hp',
            subtitle: 'Laptop',
            linkUrl: 'laptops',
            imageUrl: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/137215-laptops-news-new-hp-spectre-13-3-laptop-is-thin-aaa-battery-thin-image1-qu24lzfNya.jpg',
          },
          {
            title: 'Hp',
            subtitle: 'Super laptop',
            linkUrl: 'superLaptops',
            imageUrl: 'https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/sites/11/2016/04/Spectre_Saf_Gallery_zoom2.jpg',
          },
          {
            title: 'Hp',
            subtitle: 'Modern laptop',
            linkUrl: 'modernLaptops',
            imageUrl: 'https://www.technewsworld.com/article_images/story_graphics_xlarge/xl-2016-hp-spectre-x360-1.jpg',
          },
          {
            title: 'Hp',
            subtitle: 'Discounts for all',
            linkUrl: 'discounts',
            imageUrl: 'https://www.technewsworld.com/article_images/2016/83992_620x220.jpg',
            size: 'large',
          },
          {
            title: 'Hp',
            subtitle: 'Gaming computer',
            linkUrl: 'gamingComputers',
            imageUrl: 'https://andrepcdoctor.com/wp-content/uploads/2013/07/10-Tips-to-Follow-while-Buying-a-New-Computer.jpg',
            size: 'large',
          }
        ]
  }
  }
  
  render() {
    return (
      <div className="homepage">
        <ItemList data={ this.state.data }></ItemList>
      </div>
    );
  }
}

export default Home;
