const isIPad = /iPad/.test(navigator.userAgent)
const isIPhone = /iPhone/.test(navigator.userAgent)
const isIPod = /iPod/.test(navigator.userAgent)
const isAndroid = /Android/.test(navigator.userAgent)

export const isMobile = isIPad || isIPhone || isIPod || isAndroid
