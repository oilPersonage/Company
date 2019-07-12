import en from './languageEN'
import ru from './languageRU'

const Lang = (lang) => {
  return lang ? ru : en
}
Lang()

export default Lang
