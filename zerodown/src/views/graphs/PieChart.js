import React,{useState,useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';

function PieChartComponent(){
    const [regionData,setRegionData] = useState();

    useEffect(()=>{
        axios.get(`https://zerdown.herokuapp.com/housing_data/`)
        .then(res => {
            console.log(res.data.housing_data[0]);
            const regionData={
                labels:['Active Listings', 'Houses Sold'],
                data:[res.data.housing_data[0].total_active_listings,res.data.housing_data[0].total_homes_sold]
            };
            // const regionData=res.data.housingData.map( region =>({
            //     labels:['Active Listings', 'Houses Sold'],
            //     data:[region.total_active_listings,region.total_homes_sold]
            // }));
            setRegionData(regionData);
        })
    },[]);

    return(

        // <h1>Pie Chart</h1>
        
        <Pie
          data={regionData}
          options={{
            title:{
              display:true,
              text:'Active Listings and Total Houses Sold',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    );
}

export default PieChartComponent;