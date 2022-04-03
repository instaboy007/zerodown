// import React,{useState,useEffect} from 'react';
// import {Line} from 'react-chartjs-2';
// import axios from 'axios';

// function LineChart(){
//     const [regionData,setRegionData] = useState();

//     useEffect(()=>{
//         axios.get(`https://zerdown.herokuapp.com/housing_data/`)
//         .then(res => {
//             const regions = res.data.regions;
//             const regionNames = regions.map(region => ({ 
//                 label: region.region_name, 
//                 value: region.region_name 
//             }));
//             setRegionNames(regionNames);
//         })
//     },[]);

//     return(

//         <h1>Line Chart</h1>
//         // <Line
//         //   data={this.state.chartData}
//         //   options={{
//         //     title:{
//         //       display:this.props.displayTitle,
//         //       text:'Largest Cities In '+this.props.location,
//         //       fontSize:25
//         //     },
//         //     legend:{
//         //       display:this.props.displayLegend,
//         //       position:this.props.legendPosition
//         //     }
//         //   }}
//         // />
//     );
// }

// export default LineChart;