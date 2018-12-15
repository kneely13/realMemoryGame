import React, {Component} from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import images from "./components/images.json";

// const characterImage = ['Rowe', 'Prevost', 'Gare'];

// const CharacterLis = characterImage.map((characterImage, i ) =>
//   // expression goes here:
// 	<li key={'characterImage' + i}> { characterImage } </li>
// );
class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };
  
  // updateImage = id => {
  //   rand = 
  //   e.target.setAttribute('src', characters[random + charactersLis]);
  //   const images = this.state.images.filter(image => image.id !== id);
  //   console.log(random + "has just been changed")
  //   this.setState({ images });
  // }

  removeImage = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };


  render() {
    return (
      <div className="main">
        <div className="header">
          <Header />
          <Jumbotron />
        </div>
        <div className="container">
          {this.state.images.map(image => (
            <button className="btn" onClick={this.updateImage}>
              <Card
                removeImage={this.removeImage}
                id={image.id}
                key={image.id}
                name={image.name}
                image={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            </button>
          ))}  
        </div>
        <div className="footer">
            <Footer />
        </div>
      </div>
    )
  }
}

export default App;

