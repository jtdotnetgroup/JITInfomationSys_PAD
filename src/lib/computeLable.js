import moment from 'moment'

export function ComputePrintLable (printData, proDate) {
  let { packQty, printQty } = printData
  if (packQty * 1 === 0) {
    return []
  }
  let count = Math.ceil(printQty / packQty)

  let lastQty = printQty % packQty
  const list = []

  for (let i = 0; i < count; i++) {
    let item = JSON.parse(JSON.stringify(printData))

    item.Qty = (i === count - 1) ? lastQty : packQty
    item.printQty = item.Qty
    item.labelNum = i + 1
    item.proDate = moment(proDate).format('YYYY-MM-DD')

    if (i === count - 1 && lastQty === 0) {
      item.printQty = packQty
    }

    list.push(
      item
    )
  }

  return list
}
