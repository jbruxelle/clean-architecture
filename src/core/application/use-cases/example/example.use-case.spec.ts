import { ExampleUseCase } from "@use-cases/example/example.use-case";

describe("ExampleUseCase", () => {
  it("should be defined", () => {
    expect(new ExampleUseCase()).toBeDefined();
  });
});
