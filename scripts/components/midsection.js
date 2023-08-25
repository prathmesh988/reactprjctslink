
import React, { useEffect, useState } from 'react';
import { restaurantList } from './constants';
import api_url from './constants';
import { CloudinaryImage } from './constants';
var emptyness;
function ConstObj(namme,locattion,imageeID,avgRatting){
    this.name=namme;
    this.location=locattion;
    this.imageID=imageeID;
    this.avgRating=avgRatting;


}; 

function asyncas(api){
        
    const p1 = fetch(api)
    const p2=p1.then((response) =>{return response.json()})
    const p3 = p2.then(data => {
             const newdataarr = data?.data?.cards;
             const newarrayofdata = [];
             for (let index = 0; index < newdataarr.length; index++) {
                 if (index >= 3) {
                     newarrayofdata.push(newdataarr[index]);
                 } else {
                     console.log('else statment data , the data which is not needed anymore')
                     console.log(newdataarr[index]);
                 }
             }
             console.log(newarrayofdata)
             return newarrayofdata;
         });
     return p3;
     
     

    }


console.log('These are the restaurant list')



function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }
export  const MiddleSection = (props )=>{
  

    return(
        <>  
        <div className="content">
            <img src={CloudinaryImage+props.propy.imageID}/>
            <h2>{props.propy.name}</h2>
            {/* {`${console.log(props.propy.data)} This is prop data`} */}
            <h2>Location :- {props.propy.location}</h2>
            <h2>
                Avg rating :{props.propy.avgRating}
            </h2>
    
      </div>
      </>
    
    );
}
function loopthrough(restaurants){
    let index =0;
    let list  = restaurants.map((objs)=>{
        
        return <MiddleSection Key={index++} propy={objs} />
    })
    return list;
}
 function Food(){
    let empty =[]
    let [restaurants, setRestaurants] = useState(empty);
    let [searchText, setSearchText] = useState("");
    console.log('the restaurat objects are////////////////')
    console.log(restaurants) 

    useEffect(() => {
        console.log('helo RUNNING the async code')
        asyncas(api_url).then(
            (datarecieved)=>{
            const restaurantz = []

            for (let index = 0; index <datarecieved.length; index++) {
            
                restaurantz.push(new ConstObj(
                    datarecieved[index]?.card?.card?.info?.name ,
                    datarecieved[index]?.card?.card?.info?.locality,
                    datarecieved[index]?.card?.card?.info?.cloudinaryImageId,
                    datarecieved[index]?.card?.card?.info?.avgRatingString
                ));
                
            }
            console.log(restaurantz)

            // return a list of objects 
            emptyness=restaurantz;
            // like for example {name: 'Apna Sweets', location: 'Sudama Nagar', imageID: 'f3drzbvl7ohsoryzwcwc', avgRating: '4.1'}
            setRestaurants(restaurantz)

        })}, []);
   let list= loopthrough(restaurants);
   if(list.length===0){
    return <h1>Loading ......</h1>
   }
   else{

    return (
        
        <> 
        <div id="midtopmost">
            <input
                type='text'
                id="text-box"
                placeholder="Search a restaurant you want..."
                value={searchText}
                onChange={(e) => {
                setSearchText(e.target.value);
            }}/>
            <button id="btn" onClick={(e)=>{
                // const data = filterData(searchText, restaurants);
                if(searchText==""){
                    setRestaurants(emptyness);
                }
                else{

                    const data = filterData(searchText, restaurants);
                    setRestaurants(data)}
                        
                }}
               
                
            >search</button>
        </div>
            <div id="mid">   
            {list}
            </div>
        </>
    );}
}  
const add_to_mid = ()=>{

    return (
        <div id="mid">
           
            <Food/>
            {console.log("Mid section called")}

        
        </div>
    )
};

export default add_to_mid;
