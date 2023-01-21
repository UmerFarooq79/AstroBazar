import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useRouter } from 'next/router'

const CARD_OPTIONS = {
    iconStyle: "solid",
        style: {
          base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: '500',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
              color: '#fce883',
            },
            '::placeholder': {
              color: '#87BBFD',
            },
          },
          invalid: {
            iconColor: '#FFC7EE',
            color: '#FFC7EE',
          },
        },
}

export default function PaymentForm() {
    const [ success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const router = useRouter()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
  

    if(!error){
        try{
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:5000/Astro/checkout/payment" , {
                amount:100,
                id
            })
            if(response.data.success) {
                console.log("SUCCESSFUL PAYMENT")
                setSuccess(true)
                router.push('/account/payment-success');
            }
        } catch (error) {
            console.log("error", error)
        }
    } else{
        console.log(error.message)
    }

}


  return (
    
    <>
    {!success ?
    <form onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
            <div className='FormRow'>
                <CardElement options={CARD_OPTIONS} />
            </div>
        </fieldset>
        <button className='ps-btn ps-btn--fullwidth'>Pay with Stripe</button>
    </form>
    :
    <div></div>
    }

    </>
  )
}
