import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { Container, Row, Col } from "reactstrap";

const Mapbox = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZGFuaWVsbWVkaW5hIiwiYSI6ImNqajYxMXFyNDBjbWUzcXN3bmk3Z2JqcjAifQ.KfFBvYL667g9_-gblXgvcw"
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testPoint: [-0.481747846041145, 51.3233379650232],
      latitude: null,
      longitude: null
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      this.loadPosition();
    }
  }

  loadPosition = async () => {
    try {
      const position = await this.getCurrentPosition({
        enableHighAccuracy: true
      });
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(position);
      console.log(position.coords);
      this.setState({
        latitude,
        longitude
      });
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Lat: {this.state.latitude}</h1>
            <h1>Long: {this.state.longitude}</h1>
          </Col>
        </Row>
        <Mapbox
          // eslint-disable-next-line
          style="mapbox://styles/danielmedina/cjj8ts3l60uny2sovd7aefrwz"
          containerStyle={{ height: "100vh", width: "auto" }}
          center={this.state.testPoint}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={this.state.testPoint} />
          </Layer>
        </Mapbox>
      </Container>
    );
  }
}

export default Map;
