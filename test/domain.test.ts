
import assert from "node:assert/strict";
import test from "node:test";
import { ApiGatewayPolicyEngine, seedData } from "../src/domain.js";

test("lists seeded requests", () => {
  const engine = new ApiGatewayPolicyEngine(seedData);
  assert.equal(engine.list().length, 3);
});

test("computes requests priorities", () => {
  const engine = new ApiGatewayPolicyEngine(seedData);
  const priorities = engine.priorities();
  assert.equal(priorities.length, 3);
  assert.ok(priorities.some((item) => item.priority === "medium" || item.priority === "high"));
});
