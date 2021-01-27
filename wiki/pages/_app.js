import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import '../components/button/button.scss'
import '../styles/main.scss'
import '../components/input/input.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

config.autoAddCss = false

const App = ({Component, pageProps}) => {
  return <Component {...pageProps} />
}

export default App
