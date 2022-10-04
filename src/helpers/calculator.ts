export function getMonthPayment(
  cost: number,
  firstContribution: number,
  term: number
): number {
  const result =
    (cost - firstContribution) *
    ((0.035 * Math.pow(1 + 0.035, term)) / (Math.pow(1 + 0.035, term) - 1))

  return Math.floor(result)
}

export function getLeasingResult(
  monthPayment: number,
  firstContribution: number,
  term: number
) {
  return firstContribution + term * monthPayment
}

export function getContribution(cost: number, contributionProcents: number) {
  return Math.round(cost * (contributionProcents / 100))
}

export function validateValue(value: string, min: number, max: number): string {
  const numberValue = parseInt(value)
  if (!numberValue || numberValue < min) {
    return min.toString()
  }
  if (numberValue > max) {
    return max.toString()
  }
  return numberValue.toString()
}
