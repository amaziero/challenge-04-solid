import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userFund = this.usersRepository.findById(user_id);

    if (!userFund) {
      throw new Error("User not fund, try again");
    }

    const user = this.usersRepository.turnAdmin(userFund);

    return user;
  }
}

export { TurnUserAdminUseCase };
