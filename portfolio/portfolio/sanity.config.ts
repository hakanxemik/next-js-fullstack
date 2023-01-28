import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from 'theme'
import StudioNavbar from 'components/StudioNavbar'
import StudioLogo from 'components/StudioLogo'

export default defineConfig({
  basePath: "/studio",
  name: 'PAPAFAM_Content_Studio',
  title: 'HAKAN Content Studio',
  projectId: 'r9i2kx9f',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
