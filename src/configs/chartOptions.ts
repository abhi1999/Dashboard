import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


export const ChartOptions = {
    legend:{
      display:false
    },
    maintainAspectRatio: false,
    tooltips: {
        custom: (tooltipModel)=>{
          console.log(tooltipModel)
          CustomTooltips(tooltipModel)},
        enabled: false,
      },    
    }

export const ChartBackgroundColors = ['#3366CC',
        '#DC3912',
        '#FF9900',
        '#109618',
        '#990099',
        '#3B3EAC',
        '#0099C6',
        '#DD4477',
        '#66AA00',
        '#B82E2E',
        '#316395',
        '#994499',
        '#22AA99',
        '#AAAA11',
        '#6633CC',
        '#E67300',
        '#8B0707',
        '#329262',
        '#5574A6',
        '#3B3EAC',
        ]