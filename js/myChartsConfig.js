const config = {
  type: 'bar',
  data: {
    datasets: [
      {
        label: 'Valor Total de Vendas em R$',
        backgroundColor: '#7552cc',
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

const config2 = {
  type: 'bar',
  data: {
    datasets: [
      {
        label: 'Numero de Vendas',
        backgroundColor: '#0abf53',
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
