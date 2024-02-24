import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
            },            
            colors: {
                olivine: {
                    '50': '#f5f8ed',
                    '100': '#e9f0d7',
                    '200': '#d3e2b4',
                    '300': '#b7cf87',
                    '400': '#a0be6a',
                    '500': '#7d9f43',
                    '600': '#617e32',
                    '700': '#4a612a',
                    '800': '#3e4e26',
                    '900': '#364324',
                    '950': '#1a240f',
                }
            }
        }
    }
}