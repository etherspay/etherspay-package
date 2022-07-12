# etherspay - Javascript SDK

[![Node version](https://img.shields.io/node/v/web3.svg?style=flat)](http://nodejs.org/download/)
[![License](https://img.shields.io/github/license/etherspay/etherspay-package)](http://github.com/etherspay/etherspay-package)
[![Github Workflow](https://img.shields.io/github/workflow/status/etherspay/etherspay/check)](http://github.com/etherspay/etherspay-package)

> This is the official Javascript implementation for the Etherspay SDK

## Installation

```bash
npm install etherspay # or yarn add etherspay
```

If you’re new to etherspay, read the documentation first

## Usage

```typescript
// In Node.js
import { Etherspay } from 'etherspay';
const etp = new Etherspay('project_secret');

// Check version
console.log(etp.utils.version);
```

