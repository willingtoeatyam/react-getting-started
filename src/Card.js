import React from 'react';
import api from './config/Urls';
import Tachyons from 'tachyons';

class Card extends React.Component {
    //State declaration
    //Loading: before data is fetched
    //User: To pass data to user
    state = {
        Loading: true,
        User: null
    }

    //Asynchronous function that executes as soon as DOM is rendered
    async componentDidMount(){
        const response =  await fetch(api.url);//fetches from API
        const data = await response.json();//converts response to json format
        console.log('data results', data.results[0]);
        this.setState({Loading: false, User:data.results[0]}) //Chanhes state. i.e(PAge has 'Loaded' & User object is populated with neccesary data)
    };
    
    render(){
        const {Loading, User} = this.state; //Destructuring of state variables
        return(
            <div>
            {Loading? 
            <div> Loading... </div>   : 
            <div>
                {User ? <div>
                        <div className="mw5 center bg-dark-green br3 pa3 pa4-ns mv3 ba b--black-10">
                        <div className="tc">
                            <img src={User.picture.medium} className="br-100 h3 w3 dib" title="User's Picture" alt="User's Face"></img>
                            <h1 className="f4">{User.name.title} {User.name.first} {User.name.last}</h1>
                            <hr className="mw3 bb bw1 b--black-10"></hr>
                        </div>
                        <p className="lh-copy measure center f6 black-70">
                            Location: {User.location.state}, {User.location.country}.<br></br>
                            Username: {User.login.username}<br></br>
                            Gender:  {User.gender}.
                        </p>
                        </div>
                        </div>: 
                        <div>User not found</div>
                    }   
            </div>}            
            </div>
        )
    }
}

export default Card; //Export Component for use