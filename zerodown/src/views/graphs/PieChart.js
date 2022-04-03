import React,{useState,useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import { chartColors } from './colors';

function PieChartComponent(){
    const [regionData,setRegionData] = useState();
    const colorPicker=chartColors.sort(() => 0.5-Math.random());
    useEffect(()=>{
        axios.get(`https://zerdown.herokuapp.com/housing_data/`)
        .then(res => {

            var totalActiveListing=0;
            var totalHousesSold=0;
            for (var d in res.data.housing_data){
                totalHousesSold+=res.data.housing_data[d].total_homes_sold;
                totalActiveListing+=res.data.housing_data[d].total_active_listings;
            }

            const regionData={
                labels :['Active Listings', 'Houses Sold'],
                datasets:[{
                    label :'Active Listings and Houses Sold',
                    data :[totalActiveListing,totalHousesSold],
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
        <div className="row col-4 offset-4 mb-5">
            <Pie className='mb-2'
                data={regionData}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
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
            <h4 className="offset-1 mb-2">Active Listings and Total Houses Sold</h4>
        </div>
    );
}

export default PieChartComponent;