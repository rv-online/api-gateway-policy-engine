
import { ApiGatewayPolicyEngine, seedData } from "./domain.js";

const engine = new ApiGatewayPolicyEngine(seedData);
console.log(JSON.stringify(engine.priorities(), null, 2));
