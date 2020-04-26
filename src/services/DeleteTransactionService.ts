import AppError from '../errors/AppError';
import { getRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getRepository(Transaction);

    const transaction = transactionsRepository.findOne({
      where: { id },
    });

    if (!transaction){
      throw new AppError('Transaction does not exist!', 404);
    }

   await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
