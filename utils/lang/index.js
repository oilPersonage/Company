import en from './languageEN'
import ru from './ru/languageRU'

const Lang = (lang) => {
  return lang ? ru : en
}
Lang()

export default Lang
