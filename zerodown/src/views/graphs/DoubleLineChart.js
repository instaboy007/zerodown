import React,{useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import { chartColors } from './colors';

function DoubleLineChartComponent(){
    const [regionData,setRegionData] = useState();

    const colorPicker=chartColors.sort(() => 0.5-Math.random());

    useEffect(()=>{
        axios.get(`https://zerdown.herokuapp.com/housing_data/`)
        .then(res => {
            const regionNames=[];
            const listings=[];
            const housesSold=[];
            res.data.housing_data.map( region =>({
                regionNames :regionNames.push(region.region_name),
                listings :listings.push(region.total_active_listings),
                housesSold:housesSold.push(region.total_homes_sold)
            }));
            
            const regionData={
                labels:regionNames,
                datasets:[
                    {
                        label :'Active Listings',
                        data :listings,
                        backgroundColor:colorPicker[3]
                    },
                    {
                        label :'Houses Sold',
                        data :housesSold,
                        borderColor:colorPicker[5],
                    }     
                ],
            }
            setRegionData(regionData);
        })
    },[]);

    return(
        <div className="row col-9 offset-1 mb-5">
            <Line className='mb-2'
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
            <h4 className='offset-4 mb-2'>Region Names Active Listings and Houses Sold</h4>
        </div>
        
    );
}

export default DoubleLineChartComponent;