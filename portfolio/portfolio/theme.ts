import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": '#fff',
    "--my-black": '#1a1a1a',
    "--primary": "#03045E",
    "--primary-light": "#0077B6",
    "--primary-sanity": "#00B4D8",
    "--secondary": "#7B0063",
    "--tertiary": "#C12358"
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': props['--my-black'],
    '--white': props['--my-white'],
  
    '--gray': '#666',
    '--gray-base': '#666',
  
    '--component-bg': props['--my-white'],
    '--component-text-color': props['--my-black'],
  
    /* Brand */
    '--brand-primary': props['--primary-sanity'],
  
    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--primary-sanity'],
  
    /* Navbar */
    '--main-navigation-color': props['--my-black'],
    '--main-navigation-color--inverted': props['--my-white'],
  
    '--focus-color': props['--primary-sanity'],
  })