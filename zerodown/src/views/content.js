import React from "react";
// import LineChart from "./graphs/LineChart";
import PieChartComponent from "./graphs/PieChart";

function ContentComponent(props){
    return(
        <div className="container-box content">
            <div className="row">
                <div className="col-12">
                    <PieChartComponent/>
                    <h1>Graph1</h1>
                    <h1>Graph1</h1>
                    <h1>Graph1</h1>
                </div>
            </div>
            
        </div>
    );
}

export default ContentComponent;
