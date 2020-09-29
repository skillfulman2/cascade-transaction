import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      "Statement": {
        "Transactions": [{
          "OriginalTraceAuditNo": null,
          "AccountNumber": "123456789",
          "TransactionTypeId": "Debit",
          "TransactionDate": "2020-08-28T03:36:33",
          "BusinessDate": "2020-08-28T03:36:33",
          "AvailableBalance": 400.00,
          "Amount": 12.08,
          "Description": "Other: POS Transaction",
          "Billed": false,
          "MerchantName": "Good Buy",
          "MerchantId": "GbLV-01"
        },
        {
          "OriginalTraceAuditNo": null,
          "AccountNumber": "123456789",
          "TransactionTypeId": "Debit",
          "TransactionDate": "2020-08-28T03:50:01",
          "BusinessDate": "2020-08-28T03:50:01",
          "AvailableBalance": 400.00,
          "Amount": 129.74,
          "Description": "Other: POS Transaction",
          "Billed": false,
          "MerchantName": "Wally World",
          "MerchantId": "WWV-000-1220"
        },
        {
          "OriginalTraceAuditNo": null,
          "AccountNumber": "123456789",
          "TransactionTypeId": "Debit",
          "TransactionDate": "2020-08-28T06:43:12",
          "BusinessDate": "2020-08-28T06:43:12",
          "AvailableBalance": 400.00,
          "Amount": 8.08,
          "Description": "Other: POS Transaction",
          "Billed": true,
          "MerchantName": "Quickly Gas Stop",
          "MerchantId": "QGS-01"
        }],
        "NotSettled": [{
          "OriginalTraceAuditNo": null,
          "AccountNumber": "123456789",
          "TransactionTypeId": "Debit",
          "TransactionDate": "2020-08-28T03:36:33",
          "BusinessDate": "2020-08-28T03:36:33",
          "AvailableBalance": 400.00,
          "Amount": 12.08,
          "Description": "Other: POS Transaction",
          "MerchantName": "Good Buy",
          "MerchantId": "GbLV-01"
        },
        {
          "OriginalTraceAuditNo": null,
          "AccountNumber": "123456789",
          "TransactionTypeId": "Debit",
          "TransactionDate": "2020-08-28T03:50:01",
          "BusinessDate": "2020-08-28T03:50:01",
          "AvailableBalance": 400.00,
          "Amount": 129.74,
          "Description": "Other: POS Transaction",
          "MerchantName": "Wally World",
          "MerchantId": "WWV-000-1220"
        }]
      }
    },

    

    getters: {
        balance(state) {
            return state.Statement.Transactions[0].AvailableBalance;
        },
        transactions(state) {
            return state.Statement.Transactions;
        },
        notSettled(state) {
            return state.Statement.NotSettled;
        }
    },

  })