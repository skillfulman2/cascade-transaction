<template>
  <div id="transaction">
    <div id="overview">
        <div id="Pending Charges"></div>
    <div id="Available Balance"></div>

    <div id="startingBalance">
      <h2>Starting Balance</h2>
      <h3>${{ balance }}</h3>
    </div>
    <div id="pendingBalance">
      <h2>Pending Charges</h2>
      <h3>${{ pendingTotal }}</h3>
    </div>
    <div id="availableBalance">
      <h2>Available Balance</h2>
      <h3>${{ transactionTotal }}</h3>
    </div>
    </div>
    
    
    <h1>Transactions</h1>
    <div
      class="row"
      id="transactionItem"
      v-for="transaction in transactions"
      :key="transaction.Amount"
    >
      <h1>${{ transaction.Amount  }}</h1>
      <h5> Purchased: {{  transaction.MerchantName }}</h5>
      <h5> Time: {{  transaction.TransactionDate  }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    transactionTotal() {
      return (
        400 -
        this.$store.getters.transactions
          .reduce((acc, transaction) => acc + transaction.Amount, 0)
          .toFixed(2)
      );
    },
    pendingTotal() {
      return this.$store.getters.notSettled
        .reduce((acc, transaction) => acc + transaction.Amount, 0)
        .toFixed(2);
    },
    balance() {
      return this.$store.getters.balance;
    },
    transactions() {
      return this.$store.getters.transactions;
    },
    notSettled() {
      return this.$store.getters.notSettled;
    },
  },
};
</script>

<style scoped>
#startingBalance {
  border-radius: 25px;
  border: 2px solid #73ad21;
  padding: 20px;
  width: 200px;
  height: 120px;
}

#pendingBalance {
  border-radius: 25px;
  border: 2px solid #FFD700;
  padding: 20px;
  width: 200px;
  height: 120px;
}

#availableBalance {
  border-radius: 25px;
  border: 2px solid #7c0a02;
  padding: 20px;
  width: 200px;
  height: 120px;
}

#transactionItem {
    margin: auto;
  border-radius: 25px;
  border: 2px solid #808080;
  padding: 50px;
  width: 200px;
  height: 100px;
  
  
}
#overview {
    column-count: 3;
}
</style>
