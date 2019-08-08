import React, {Component} from "react"
import "./Transaction.css"

export default class Transaction extends Component {
    state = {
        account: '',
        ammount: '',
        transactionType: '',
    }
    render() {
        return (
            <div>
                Transaction
            </div>

        )
    }
}