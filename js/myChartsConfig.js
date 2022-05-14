const config = {
  type: 'bar',
  data: {
    datasets: [
      {
        label: 'Valor Total de Vendas em R$',
        backgroundColor: '#7552cc',
        data: [
          // {
          //   id: 'Antonio',
          //   nested: { value: 25482.0 }
          // },
          // {
          //   id: 'Francisco',
          //   nested: { value: 26521.0 }
          // },
          // {
          //   id: 'João',
          //   nested: { value: 34003.52 }
          // },
          // {
          //   id: 'Maria',
          //   nested: { value: 18933.0 }
          // },
          // {
          //   id: 'Neide',
          //   nested: { value: 52478.63 }
          // },
          // {
          //   id: 'Oliver',
          //   nested: { value: 15230.98 }
          // }
        ]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: 'id',
      yAxisKey: 'nested.value'
    }
  }
}

const config2 = {
  type: 'bar',
  data: {
    datasets: [
      {
        label: 'Numero de Vendas',
        backgroundColor: '#0abf53',
        data: [
          // {
          //   id: 'Antonio',
          //   nested: { value: 245 }
          // },
          // {
          //   id: 'Francisco',
          //   nested: { value: 242 }
          // },
          // {
          //   id: 'João',
          //   nested: { value: 326 }
          // },
          // {
          //   id: 'Maria',
          //   nested: { value: 200 }
          // },
          // {
          //   id: 'Neide',
          //   nested: { value: 480 }
          // },
          // {
          //   id: 'Oliver',
          //   nested: { value: 102 }
          // }
        ]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: 'id',
      yAxisKey: 'nested.value'
    }
  }
}
/*
const config3 = {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [70, 30],
        backgroundColor: ['#ffc845', '#037ef3'],
        hoverOffset: 2
      }
    ]
  }
}
*/
// const config4 = {
//   type: 'bar',
//   data: {
//     datasets: [
//       {
//         label: 'Ticket Médio',
//         backgroundColor: '#da1884',

//         data: [
//           {
//             id: 'Antonio',
//             nested: { value: 245 }
//           },
//           {
//             id: 'Francisco',
//             nested: { value: 242 }
//           },
//           {
//             id: 'João',
//             nested: { value: 326 }
//           },
//           {
//             id: 'Maria',
//             nested: { value: 200 }
//           },
//           {
//             id: 'Neide',
//             nested: { value: 480 }
//           },
//           {
//             id: 'Oliver',
//             nested: { value: 102 }
//           }
//         ]
//       }
//     ]
//   },
//   options: {
//     parsing: {
//       xAxisKey: 'id',
//       yAxisKey: 'nested.value'
//     }
//   }
// }

const config3 = {
  type: 'bar',
  data: {
    datasets: [
      {
        label: 'Comissões',
        backgroundColor: '#0cb9c1',
        data: []
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: 'id',
      yAxisKey: 'nested.value'
    }
  }
}
const config4 = {
  type: 'bar',
  data: {
    datasets: [
      {
        label: '',
        backgroundColor: '#da1884',
        data: []
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: 'id',
      yAxisKey: 'nested.value'
    }
  }
}
Chart.defaults.color = '#ffffff'
Chart.defaults.borderColor = '#030303'
// Chart.defaults.font.size = 16
Chart.defaults.font.size = 16
var myChart = new Chart(document.getElementById('myChart'), config)
var myChart2 = new Chart(document.getElementById('myChart2'), config2)
var myChart3 = new Chart(document.getElementById('myChart3'), config3)
var myChart4 = new Chart(document.getElementById('myChart4'), config4)
