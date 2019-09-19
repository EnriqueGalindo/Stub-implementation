import React from "react";
import { postImages, getImages } from "../clientAPI/client"

class Home extends React.Component {

  state = {
    imageURIs: []
  }

  componentDidMount() {

    Promise.resolve(getImages())
      .then((object) => { this.setState({ imageURIs: object.imageURI }) })


    // fetch ("http://localhost:3000/api/images")
    //   .then(res => res.text())
    //   .then(res => console.log(res))
  }

  render() {
    
    // this.state.imageURIs.forEach((url)=>{
    //   imgElements.push("<img src="+url+">")
    // })
    return (
      <>
        <h1>Kenziegram</h1>
        {this.state.imageURIs.map(imageURI => (
          <img src={imageURI}/>
        ))}
        <form onSubmit={postImages, () => alert("submission successful")}>
        <input type="file" name="name" />
        <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Home;
