export const GTM_ID = "GTM-WXDPBKL"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
