import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const renderRestaurants = this.props.restaurants.map(restaurant => 
      <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.delete} />
    )
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;