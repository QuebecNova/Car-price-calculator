export function formatting(locales: string | string[]) {
  const intlFormat = new Intl.NumberFormat(locales)
  return (value: number) => {
    return intlFormat.format(value)
  }
}
