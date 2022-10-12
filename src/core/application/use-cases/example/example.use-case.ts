import { UseCase } from "@shared/use-case";
import { AppThunk } from "@store/redux.store";

export class ExampleUseCase implements UseCase<{ exampleProps: string }> {
  execute =
    (input: { exampleProps: string }): AppThunk<Promise<void>> =>
    async (dispatch, getState, dependencies) => {
      return undefined;
    };
}
