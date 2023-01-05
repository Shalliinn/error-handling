const path=require('path');
const express=require('express')
const errorHandler=require('../middleware/error')
const expenseController=require('../controllers/expense')
const router=express.Router();
router.post('/add-expense', expenseController.postexpense,errorHandler);
router.get('/get-expense', expenseController.getexpense,errorHandler);
router.delete('/delete-expense/:id', expenseController.deleteexpense,errorHandler);
//router.get('/edit-expence/:id', expenceController.getEditexpence);

module.exports=router;