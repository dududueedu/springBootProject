import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/formats';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string,
    data: number[]
}

type ChartData = {
    labels: {
        categories: string [];
    }
    series: SeriesData[];
} 

function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({ 
        labels: {categories:[]}, 
        series: [{name: "", data: []}] }) //Mantem estado no componente

    useEffect(() => { //Executa algo na instanciação ou destruição do componente, observar estado
        axios.get(`${BASE_URL}/sales/success-by-seller`)
        .then(response => {
            const data = response.data as SaleSuccess[]
            const myLabels = data.map(x => x.sellerName)
            const mySeries = data.map(x => round(x.deals/x.visited * 100, 1))

            setChartData ({
                labels: {
                categories: myLabels
            },
            series: [
                {
                    name: "% Sucesso",
                    data: mySeries                  
                }
            ]})
        });
    }, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    /*const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };*/

    return (
        <Chart
            options = {{...options, xaxis: chartData.labels}}
            series = {chartData.series}
            height = "240px"
            type = "bar"
        />
    );
}

export default BarChart;