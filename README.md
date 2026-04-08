# API Gateway Policy Engine

TypeScript policy engine for request evaluation, route-level rule matching, and gateway-style enforcement decisions.

## Why This Exists

Designed to look like the control logic behind an internal API gateway where policy clarity and explainability matter as much as raw correctness.

## What This Demonstrates

- request classification and route policy matching
- deny-first evaluation and explanation traces
- small codebase with infrastructure-flavored abstractions

## Architecture

1. request context is normalized before evaluation
1. policy rules are sorted and applied in deterministic priority order
1. decisions include explanation traces for debugging and review

## Run It

```bash
npm test
npm run build
```

## Verification

Run `npm test` and `npm run build` to verify policy behavior and compile health.
