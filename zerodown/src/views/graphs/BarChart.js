import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import { chartColors } from './colors';

function BarChartComponent(){
    const [regionData,setRegionData] = useState();

    const colorPicker=chartColors.sort(() => 0.5-Math.random());

    useEffect(()=>{
        axios.get(`https://zerdown.herokuapp.com/housing_data/`)
        .then(res => {
            const regionNames=[];
            const housesSold=[];

            res.data.housing_data.map( region =>({
                regionNames : regionNames.push(region.region_name),
                housesSold : housesSold.push(region.total_homes_sold),
            }));
            
            const regionData={
                labels:regionNames,
                datasets:[{
                    label :'Homes Sold',
                    data :housesSold,
                    backgroundColor:colorPicker
                }],
            }
            setRegionData(regionData);
        })
    },[]);

    return(
        <div className="row col-8 offset-2 mb-5">
            <Bar
                data={regionData}
                options={{
                    title:{
                    display:true,
                    text:'Line Chart',
                    fontSize:25
                    },
                    legend:{
                    display:true,
                    position:'top',
                    }
                }}
            />
            <h4 className='offset-4'>Region Names and Total Houses Sold</h4>
        </div>
        
    );
}

export default BarChartComponent;