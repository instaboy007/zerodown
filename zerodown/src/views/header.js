import React from "react";
import axios from 'axios';

import Select from 'react-select';

import {useState,useEffect } from "react";

import '../assets/css/styles.css'

  
const regionType = [
    { label: 'None', value: 'None' },
    { label: 'Metro', value :'Metro'},
    { label: 'County', value :'County'},
]

const yearValue = [
    { label: 'All Time', value: 'All Time' },
    { label: '2017', value :'2017'},
    { label: '2018', value :'2018'},
    { label: '2019', value :'2019'},
    { label: '2020', value :'2020'},
    { label: '2021', value :'2021'},
    { label: '2022', value :'2022'},
]

function HeaderComponent(){

    const [regionNames, setRegionNames] = useState({label:"None",value:"None"});
    
    useEffect(()=>{
        axios.get(`https://zerdown.herokuapp.com/housing_data/regions`)
        .then(res => {
            const regions = res.data.regions;
            const regionNames = regions.map(region => ({ 
                label: region.region_name,
                value: region.region_name 
            }));
            setRegionNames(regionNames);
        })
    },[]);

    return (
        <div className="container-box header">
            <div className="row row-header">
                {regionNames && 
                    <div className="col-6">
                        <Select placeholder={<div>Select a Region</div>} options={regionNames}/>
                    </div>
                }
                <div className="col-3">
                    <Select placeholder={<div>County/Metro</div>} options={regionType}/>
                </div>
                <div className="col-3">
                    <Select placeholder={<div>Select an Year</div>} options={yearValue}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;