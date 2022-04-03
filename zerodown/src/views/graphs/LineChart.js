import React,{useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import { chartColors } from './colors';

function LineChartComponent(){
    const [regionData,setRegionData] = useState();
    const colorPicker=chartColors.sort(() => 0.5-Math.random());
    useEffect(()=>{
        axios.get(`https://zerdown.herokuapp.com/housing_data/`)
        .then(res => {
            const regionNames=[];
            const housesSold=[];
            res.housingData.map(region =>({
                regionNames :regionNames.push(region.region_name),
                housesSold :housesSold.push(region.total_active_listings),
            }));
            // const regionData=res.data.housingData.map(region =>({
            //     labels :['Active Listings', 'Houses Sold'],
            //     datasets:[{
            //         label :'Active Listings and Houses Sold',
            //         data :[res.data.housing_data[0].total_active_listings,res.data.housing_data[0].total_homes_sold],
            //         backgroundColor:colorPicker
            //     }],
            // }));
            const regionData={
                labels:regionNames,
                datasets:[{
                    label :'Regions and Active Listings',
                    data :housesSold,
                    backgroundColor:colorPicker
                }],
            }
            
            setRegionData(regionData);
        })
    });

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

export default LineChartComponent;