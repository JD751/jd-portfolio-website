const baseURL = 'nextjs-portfolio.up.railway.app'

const routes = {
    '/':        true,
    '/about':   true,
    '/projects':true,
    '/blog':    true,
    '/gallery': false,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/projects/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects = {
    gradient: true,
    dots:     true,
    lines:    false,
}

const style = {
    theme:       'dark',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'violet',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'violet',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'playful',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'all'           // all | micro | macro
}

const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://851eba9b.sibforms.com/serve/MUIFACAT8eCxE7nORt3HJt2xuxcm1Q3Ci7u7je6YZ8PyU85FKydE-PkVuKmzgBLWJNJ2D5ud1CzEnTCtqb93Q37WuYl0PdEGe75PrBW_3ipCoF9Q2JsGRjCiHT__Vzvk5RZ_rRCRi09QicEKnTihhvkXmsCAyaf3GTF9xFDUeBFfdx6klcfOYK2VoJBRiJFLOT5L2-j3kQV81QN5',
    effects: {
        gradient: true,
        dots:     false,
        lines:    true,
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };