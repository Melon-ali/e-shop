export const formatNumber = (disit: number) => {
    return new Intl.NumberFormat('en-Us').format(disit)
}