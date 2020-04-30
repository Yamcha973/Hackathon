import React, { Component } from 'react';
import axios from 'axios';


class RequestApi extends Component {
   constructor(props){
      super(props);
      this.state = {         
         responseApi: {},
         category: "mountain",
         urlEmbed: "https://webcams.windy.com/webcams/public/embed/player/1475983996/live"
      }
      this.getRequest = this.getRequest.bind(this);
      this.changeCategory = this.changeCategory.bind(this);
   }
   changeCategory(event){
      console.log("appel fonction changeCategory");
      this.setState({category: event.target.value});
      this.getRequest();
      this.setState ({urlEmbed : this.state.responseApi.result.webcams[1].player.live.embed});
      console.log(this.state.urlEmbed);
   }
   getRequest() {console.log("appel fonction getRequest");                             //-    country=US/
        axios.get(`https://api.windy.com/api/webcams/v2/list/category=${this.state.category}/property=live?show=webcams:player&key=ZVFIh6Wjk3w31j1NaRJXSF09NvKrlYe4`)
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
         <div className="container-gallery" >
         <iframe width="500" height="300" title="livestream" src={this.state.urlEmbed} ></iframe>
         <img src="" alt=""/>
         <select id="category-change" onChange={(event) => this.changeCategory(event)} >
            <option value="beach" >Select category</option>
            <option value="beach" >Plages</option>
            <option value="island" >Iles</option>
            <option value="mountain" >Montagne</option>
            <option value="city" >Ville</option>
            <option value="camping" >Camping</option>
            <option value="coast" >Côte</option>
            <option value="golf" >Golf</option>
            <option value="forest" >Foret</option>
            <option value="harbor" >Port</option>
            <option value="resort" >Hôtel</option>
            <option value="lake" >Lac</option>
            <option value="park" >Parc</option>
            <option value="pool" >Piscine</option>
            <option value="sportarea" >Aire de sports</option>
            <option value="square" >Jardin</option>
            <option value="traffic" >Rues</option>
         </select>
         </div>
      )
   }
}

export default RequestApi;