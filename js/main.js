async function getDashboard() {
  try {
    const response = await fetch('./js/data.json')
    const data = await response.json()
    show(data)
  } catch (error) {
    console.error(error)
  }
}

function show(sales) {
  const [vrNames, vrRevenues] = getRevenueChartContent(sales, 'desc')

  updateGraph(myChart, 'Total de Vendas em R$', vrNames, vrRevenues)

  const [vnNames, vnAmoutOfSales] = getAmountOfSalesChartContent(sales, 'desc')
  updateGraph(myChart2, 'Número de Vendas', vnNames, vnAmoutOfSales)

  const [vcNames, vcComissions] = getCommissionChartContent(sales, 'desc')
  updateGraph(myChart3, 'Comissões em R$', vcNames, vcComissions)

  const [vaNames, vaAverageTickets] = getAverageTicketChartContent(
    sales,
    'desc'
  )
  updateGraph(myChart4, 'Ticket Médio em R$', vaNames, vaAverageTickets)

  // General Info
  const totalRevenue = calculateTotalRevenue(sales)
  const totalAmountOfSales = calculateTotalAmountOfSales(sales)
  const totalComissionValue = calculateTotalComissionValue(sales)
  $('#totalRevenue').innerHTML = ` ${formatLocalCurrencyBRL(totalRevenue)}`

  $(`#totalAmountOfSales`).innerHTML = `${totalAmountOfSales}`

  $('#teamAverageTicket').innerHTML = `  
    ${formatLocalCurrencyBRL(
      calculateTeamAverageTicket(totalRevenue, totalAmountOfSales)
    )}
    `

  $('#totalCommisionValue').innerHTML = `${formatLocalCurrencyBRL(
    totalComissionValue
  )}`
}

function getRevenueChartContent(sales, sort) {
  const vendorNames = sales.map(function (sale) {
    return sale.vendedor
  })

  const vendorRevenue = sales.map(function (sale) {
    return sale.valortotal
  })

  return sortChartContent(sort, vendorNames, vendorRevenue)
}

function getAmountOfSalesChartContent(sales, sort) {
  const vendorNames = sales.map(function (sale) {
    return sale.vendedor, sale.vendedor
  })

  const amountOfSales = sales.map(function (sale) {
    return sale.numerodevendas
  })

  return sortChartContent(sort, vendorNames, amountOfSales)
}

function getAverageTicketChartContent(sales, sort) {
  const vendorNames = sales.map(function (sale) {
    return sale.vendedor
  })
  const averageTickets = calculateAllAverageTickets(sales)
  return sortChartContent(sort, vendorNames, averageTickets)
}

function getCommissionChartContent(sales, sort) {
  const vendorNames = sales.map(function (sale) {
    return sale.vendedor
  })
  const commissions = calculateAllComissions(sales)
  return sortChartContent(sort, vendorNames, commissions)
}

function sortChartContent(sort, idValues, propertyValues) {
  if (sort == 'asc') {
    const idWithProperty = associateIdWithProperty(idValues, propertyValues)
    sort2DArrayByAscendingPropertyValue(idWithProperty)
    return splitAssociatedArrays(idWithProperty)
  } else if (sort == 'desc') {
    const idWithProperty = associateIdWithProperty(idValues, propertyValues)
    sort2DArrayByDescendingPropertyValue(idWithProperty)
    return splitAssociatedArrays(idWithProperty)
  }
  return [idValues, propertyValues]
}

function sort2DArrayByAscendingPropertyValue(arrayOfObjects) {
  arrayOfObjects.sort((a, b) => a.property - b.property)
}

function sort2DArrayByDescendingPropertyValue(arrayOfObjects) {
  arrayOfObjects.sort((a, b) => b.property - a.property)
}

function associateIdWithProperty(idValues, propertyValues) {
  const arrayOfObjects = idValues.map((id, index) => {
    const newObj = {}
    newObj.id = id
    newObj.property = propertyValues[index]
    return newObj
  })
  return arrayOfObjects
}

function splitAssociatedArrays(associatedArray) {
  const ids = associatedArray.map(index => index.id)
  const properties = associatedArray.map(index => index.property)
  return [ids, properties]
}

function updateGraph(graph, graphTitle, labels, data) {
  graph.config.data.datasets[0].label = graphTitle
  graph.config.data.labels = labels
  graph.config.data.datasets[0].data = data
  graph.update()
}

function calculateAllComissions(sales) {
  const commissions = sales.map(function (sale) {
    let commission = calculateCommission(sale.valortotal).toFixed(2)
    return commission
  })
  return commissions
}

function calculateAllAverageTickets(sales) {
  const averageTickets = sales.map(function (sale) {
    let averageTicket = calculateAverageTicket(
      sale.valortotal,
      sale.numerodevendas
    ).toFixed(2)
    return averageTicket
  })
  return averageTickets
}

function calculateCommission(totalSalesValue) {
  const commission =
    totalSalesValue <= 20000 ? totalSalesValue * 0.03 : totalSalesValue * 0.05
  return commission
}

function calculateAverageTicket(totalSalesValue, numberOfSales) {
  const averageTicket = totalSalesValue / numberOfSales
  return averageTicket
}

function calculateTotalRevenue(sales) {
  const initialValue = 0
  const revenues = sales.map(sale => sale.valortotal)

  const totalRevenue = revenues.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    initialValue
  )
  return Number(totalRevenue.toFixed(2))
}
function calculateTotalAmountOfSales(sales) {
  const initialValue = 0
  const amountOfSales = sales.map(sale => sale.numerodevendas)

  const totalAmountOfSales = amountOfSales.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    initialValue
  )
  return Number(totalAmountOfSales.toFixed(2))
}

function calculateTeamAverageTicket(totalRevenue, totalAmoutOfSales) {
  return Number(totalRevenue / totalAmoutOfSales)
}

function calculateTotalComissionValue(sales) {
  const initialValue = 0
  const comissionValues = sales.map(sale =>
    calculateCommission(sale.valortotal)
  )
  const totalComissionValue = comissionValues.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    initialValue
  )
  return Number(totalComissionValue.toFixed(2))
}

function formatLocalCurrencyBRL(currencyValue) {
  const formattedCurrency = currencyValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return formattedCurrency
}

function $(selector) {
  return document.querySelector(selector)
}

async function getTables() {
  try {
    const response = await fetch('./js/data.json')
    const data = await response.json()
    showTableWithMissingContent(data)
    showTableWithFullContent(data)
  } catch (error) {
    console.error(error)
  }
}

function showTableWithMissingContent(sales) {
  $('#missing-table-content').innerHTML = getTableWithMissingContent(sales)
}

function showTableWithFullContent(sales) {
  $('#full-table-content').innerHTML = getTableWithFullContent(sales)
}

function getTableWithFullContent(sales) {
  let i = 1
  let output = `<table class="table table-dark table-striped text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Vendedor</th>
      <th scope="col">Valor Total</th>
      <th scope="col">Número de Vendas</th>
      <th scope="col">Ticket Médio</th>
      <th scope="col">Comissão</th>
    </tr>
  </thead>
  <tbody>`
  for (let sale of sales) {
    output += ` 
    <tr>
    <th scope="row">${i}</th>
    <td>${sale.vendedor}</td>
    <td>${formatLocalCurrencyBRL(sale.valortotal)}</td>
    <td>${sale.numerodevendas}</td>
    <td>${formatLocalCurrencyBRL(
      calculateAverageTicket(sale.valortotal, sale.numerodevendas)
    )}</td>
    <td>${formatLocalCurrencyBRL(calculateCommission(sale.valortotal))}</td>
  </tr>`
    i++
  }
  output += `
  </tbody>
  </table>`
  return output
}

function getTableWithMissingContent(sales) {
  let i = 1
  let output = `<table class="table table-dark table-striped text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Vendedor</th>
      <th scope="col">Valor Total</th>
      <th scope="col">Número de Vendas</th>
      <th scope="col">Ticket Médio</th>
      <th scope="col">Comissão</th>
    </tr>
  </thead>
  <tbody>`
  for (let sale of sales) {
    output += ` 
    <tr>
    <th scope="row">${i}</th>
    <td>${sale.vendedor}</td>
    <td>${formatLocalCurrencyBRL(sale.valortotal)}</td>
    <td>${sale.numerodevendas}</td>
    <td>X</td>
    <td>X</td>
  </tr>`
    i++
  }
  output += `
  </tbody>
  </table>`
  return output
}
