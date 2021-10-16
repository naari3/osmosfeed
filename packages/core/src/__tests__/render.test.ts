import { describe, expect, it } from "@osmoscraft/typescript-testing-library";
import { render } from "../lib";

describe("Render", () => {
  it("Renders empty feed", async () => {
    const result = render([], "");
    expect(result.includes("<!DOCTYPE html>")).toEqual(true);
  });
});