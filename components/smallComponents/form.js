import {useState} from 'react'
import {SendMessage, Svg, FormBody, Title, ButtonSend} from '../../styled/main.style'

const Form = ({onSubmit, l}) => {
  const [fio, setFio] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')
  const {form} = l
  const {title} = form
  const labelFio = form.name
  const labelPhone = form.phone
  const labelText = form.text

  return <SendMessage>
    <React.Fragment>
      <Svg circle viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="200"></circle>
      </Svg>
      <Svg viewBox="0 0 100 100">
        <polygon points="0,100 0,0 100,0 100,100"/>
      </Svg>
      <FormBody onSubmit={() => onSubmit({name: fio, phone, text})}>
        <Title>{title}</Title>
        <input type="text" placeholder={labelFio} onChange={(e) => setFio(e.target.value)}/>
        <input type="text" placeholder={labelPhone} onChange={(e) => setPhone(e.target.value)}/>
        <textarea placeholder={labelText} onChange={(e) => setText(e.target.value)}></textarea>
        <ButtonSend>Заказать</ButtonSend>
      </FormBody>
    </React.Fragment>
  </SendMessage>
}

export default Form
