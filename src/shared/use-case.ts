import { type AppThunk } from "@store/redux.store";

type UseCaseInput = Record<string, any>;

export interface UseCase<Input = UseCaseInput> {
  execute(input: Input): AppThunk<Promise<void>>;
}
