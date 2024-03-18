import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Get } from '../../util/fetch';

export default function Dashboard() {

    const [valoresCo2, setValoresCo2] = useState([0])
    const [valoresPm25, setValoresPm25] = useState([0])
    const [valoresPm10, setValoresPm10] = useState([0])
    const [valoresUmidade, setValoresUmidade] = useState([0])
    const [valoresVocs, setValoresVocs] = useState([0])
    const [valoresTemp, setValoresTemp] = useState([0])
    const [valoresRenovAr, setValoresRenovAr] = useState([0])
    const [valoresRadonio, setValoresRadonio] = useState([0])
    const [valoresBacteria, setValoresBacteria] = useState([0])

    useEffect(() => {
        Get("/dashboard")
            .then(data => {
                setValoresCo2(data.valoresCo2)
                setValoresPm25(data.valoresPm25)
                setValoresPm10(data.valoresPm10)
                setValoresUmidade(data.valoresUmidade)
                setValoresVocs(data.valoresVocs)
                setValoresTemp(data.valoresTemp)
                setValoresRenovAr(data.valoresRenovAr)
                setValoresRadonio(data.valoresRadonio)
                setValoresBacteria(data.valoresBacteria)
            })
    }, [])

    const options = {
        chart: {
            type: 'line'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0
            }
        },
        title: {
            text: 'Dashboard'
        },
        series: [{ name: "co2", data: valoresCo2 },
        { name: "pm10", data: valoresPm10 },
        { name: "pm25", data: valoresPm25 },
        { name: "umidade", data: valoresUmidade },
        { name: "vocs", data: valoresVocs },
        { name: "temp", data: valoresTemp },
        { name: "renov_ar", data: valoresRenovAr },
        { name: "rondonio", data: valoresRadonio },
        { name: "fungos", data: valoresBacteria }
        ]
    };

    return (
        <>
            <div className='mt-10 shadow-2xl px-10 py-5'>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </>
    )
}