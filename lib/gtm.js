export const GTM_ID = "GTM-NQVPSPX"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
