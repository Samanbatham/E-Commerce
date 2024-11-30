import paypal from 'paypal-rest-sdk'


paypal.configure({
    mode:'sandbox',
    client_id:'AZfWvwrTxPoFp7YVNO76smwCRioCBa_e2cgaJcuKcx90Rs5jgcloigbaF055VtYgrf7VaSjj_Km7SDYP',
    client_secret:'EJdVuz4splWgDbKSUNwhlYXbKQflU3FWOhy2NU3tNsucdX9aDtXlbr6rILgkD-RNJ7koYBipCFEnU5R7'
})
export default paypal;