const express = require('express');
const { listCategories } = require('./controllers/categories')
const { verifyLogin } = require('./filter/verifyLogin');
const {
    registerUser,
    login,
    detailUser,
    updateUser
} = require('./controllers/users');
const {
    listTransactions,
    detailTransaction,
    registerTransaction,
    updateTransaction,
    deleteTransaction,
    transactionStatement
} = require('./controllers/transactions')

const router = express();

//users
router.post('/usuario', registerUser);
router.post('/login', login);
router.get('/usuario', verifyLogin, detailUser);
router.patch('/usuario', verifyLogin, updateUser);

//categories
router.get('/categoria', verifyLogin, listCategories);

//transactions
router.get('/transacao', verifyLogin, listTransactions);
router.get('/transacao/extrato', verifyLogin, transactionStatement);
router.get('/transacao/:id', verifyLogin, detailTransaction);
router.post('/transacao', verifyLogin, registerTransaction);
router.put('/transacao/:id', verifyLogin, updateTransaction);
router.delete('/transacao/:id', verifyLogin, deleteTransaction);

module.exports = router;