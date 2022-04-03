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
                labels :['Active Listings', 'Houses Sold'],
                datasets:[{
                    label :'Active Listings and Houses Sold',
                    data :[res.data.housing_data[0].total_active_listings,res.data.housing_data[0].total_homes_sold],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                      ]
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
        <div className="row col-4 offset-4">
            <Pie
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
        </div>
    );
}

export default PieChartComponent;