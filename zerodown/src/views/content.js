import React from "react";
import LineChart from "./graphs/LineChart";
import PieChartComponent from "./graphs/PieChart";
import BarChartComponent from "./graphs/BarChart";
import DoubleLineChartComponent from "./graphs/DoubleLineChart";

function ContentComponent(props){
    return(
        <div className="container-box content">
            <div className="row">
                <div className="col-12">
                    <PieChartComponent/>
                    <LineChart />
                    <BarChartComponent />
                    <DoubleLineChartComponent />
                </div>
            </div>
            
        </div>
    );
}

export default ContentComponent;
