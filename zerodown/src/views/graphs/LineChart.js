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
            const listings=[];
            res.data.housing_data.map( region =>({
                regionNames :regionNames.push(region.region_name),
                housesSold :listings.push(region.total_active_listings),
            }));
            
            const regionData={
                labels:regionNames,
                datasets:[{
                    label :'Active Listings',
                    data :listings,
                    backgroundColor:colorPicker
                }],
            }
            setRegionData(regionData);
        })
    },[]);

    return(
        <div className="row col-8 offset-2 mb-5">
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
            <h4 className='offset-4'>Region Names and Active Listings</h4>
        </div>
        
    );
}

export default LineChartComponent;