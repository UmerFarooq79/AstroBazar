import React, { useState } from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'


const PUBLIC_KEY = "pk_test_51MMdA1JnRs8RRwTJ2RPa7ZTxFZT9MQrXVu53We7hISJrte7veRGOTUiMCDQRXZQN7NSlZceXC35Av4Q83ipRMt0900KD8V8OE5"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


const ModulePaymentMethods = () => {
    const Router = useRouter();
    const [method, setMethod] = useState(1);

    function handleChangeMethod(e) {
        setMethod(e.target.value); //e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push('/account/payment-success');
    }

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');

            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((result) => {
                    accountChangedHandler(result[0]);
                    setConnButtonText('Wallet Connected');
                    getAccountBalance(result[0]);
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        } else {
            console.log('Need to install MetaMask');
            setErrorMessage(
                'Please install MetaMask browser extension to interact'
            );
        }
    };

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    };

    const getAccountBalance = (account) => {
        window.ethereum
            .request({ method: 'eth_getBalance', params: [account, 'latest'] })
            .then((balance) => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    };

    // listen for account changes
  

    

    return (
        <>
            <h4>Payment Methods</h4>
            <div className="ps-block--payment-method">
                <div className="ps-block__header">
                    <Radio.Group
                        onChange={(e) => handleChangeMethod(e)}
                        value={method}>
                        <Radio value={1}>
                            MetaMask / Card Payment with Stripe{' '}
                        </Radio>
                        <Radio value={2}>Cash on Delivery</Radio>
                    </Radio.Group>
                </div>
                <div className="ps-block__content">
                    {method === 1 ? (
                        <div className="ps-block__tab">
                            <div className="walletCard">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={defaultAccount}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Balance</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder= {userBalance + ' ETH'}
                                        contentEditable = "false"
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    {errorMessage}
                                    <button
                                        className="ps-btn ps-btn--fullwidth"
                                        onClick={connectWalletHandler}>
                                        {connButtonText}
                                    </button>
                                </div>
                            </div>
                            <div className='form-group'>
                                <center><label>OR</label></center>
                            </div>
                            <div className="form-group">
                            <Elements stripe={stripeTestPromise}>
                            <PaymentForm />
                            </Elements> 
                            </div>
                        </div>
                    ) : (
                        <div className="ps-block__tab">
                            <a
                                className="ps-btn"
                                onClick={(e) => handleSubmit(e)}
                                target="_blank">
                                Proceed with COD
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ModulePaymentMethods;
