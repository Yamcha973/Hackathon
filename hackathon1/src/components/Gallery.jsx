import React, { Component } from 'react';
import axios from 'axios';

class Gallery extends Component {
   constructor(props){
      super(props);
      this.state = {
         responseApi:{},
         country: "FR",
         urlPreview: "https://zupimages.net/up/20/18/wnrf.jpg"
      }
      this.changeCountry=this.changeCountry.bind(this);
      this.getRequest=this.getRequest.bind(this);
   }
   changeCountry(event){
      this.setState({country: event.target.value});
      this.getRequest();
      this.setState({ urlPreview : this.responseApi.result.webcams[1].image.daylight.preview })
   }
   getRequest() {console.log("appel fonction getRequest");                             
        axios.get(`https://api.windy.com/api/webcams/v2/list/country=${this.state.country}?show=webcams:image&key=ZVFIh6Wjk3w31j1NaRJXSF09NvKrlYe4`)
        .then(response => response.data)
        .then(data => {
            this.setState({
          responseApi: data
            })
        }).then(console.log(this.state.responseApi))    
   } 
   componentDidMount(){
      this.getRequest();
   }
   render(){
      return(
         <div className="gallery" >
            <select id="gallery" onChange={ (event) => this.changeCountry(event)} >
            <option value="IT">Italie</option>
            <option value="FR">France</option>
            <option value="TN">Tunisie</option>
            <option value="ES">Espagne</option>
            <option value="US">Etats-Unis</option>
            <option value="RU">Russie</option>
            <option value="BR">Brésil</option>
            <option value="BE">Belgique</option>
         </select>
         <button onClick={ () => this.getRequest()} >Valider</button>
         {/* {this.state.url.map( element =>  )} */}
         <img src={this.state.urlPreview} alt="alt" />
         </div>
      )
   }
}

export default Gallery;