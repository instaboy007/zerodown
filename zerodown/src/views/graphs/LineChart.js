import React,{useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import { chartColors } from './colors';

function LineChart(){
    const [regionData,setRegionData] = useState();
    const colorPicker=chartColors.sort(() => 0.5-Math.random());
    useEffect(()=>{
        axios.get(`https://zerdown.herokuapp.com/housing_data/`)
        .then(res => {
            const regionData={
                labels :['Active Listings', 'Houses Sold'],
                datasets:[{
                    label :'Active Listings and Houses Sold',
                    data :[res.data.housing_data[0].total_active_listings,res.data.housing_data[0].total_homes_sold],
                    backgroundColor:colorPicker.slice(0,2)
                }],
            };
            // const regionData=res.data.housingData.map( region =>({
            //     labels:['Active Listings', 'Houses Sold'],
            //     data:[region.total_active_listings,region.total_homes_sold]
            // }));
            setRegionData(regionData);
        })
    },[]);

    return(

        <Line
          data={regionData}
          options={{
            title:{
              display:true,
              text:'Line Chart',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right',
            }
          }}
        />
    );
}

export default LineChart;