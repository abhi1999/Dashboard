import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


export const ChartOptions = {
    legend:{
      display:false,
      labels: {
        boxWidth: 10
      },
      position: 'right',
    },
    maintainAspectRatio: false,
    tooltips: {
        custom: CustomTooltips,
        enabled: false,
    },   
  }

export const ChartBackgroundColors1 = ['#3366CC',
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
export const ChartBackgroundColors =
['#e6f1ff',
'#cce2ff',
'#b3d4ff',
'#99c5ff',
'#80b7ff',
'#66a8ff',
'#4d9aff',
'#338bff',
'#1a7dff',
'#006eff',
'#0063e6',
'#0058cc',
'#004db3',
'#004299',
'#003780',
'#002c66',
'#00214d',
'#001e46',
'#001633',
'#000b1a']