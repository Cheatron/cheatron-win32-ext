# @cheatron/win32-ext

Extended Win32 definitions and constants for the Cheatron ecosystem. This package provides additional type definitions, constants, and structures for interacting with the Windows API, building upon `win32-def`.

## Features

- **Extended Constants**: Additional Win32 constants not covered by standard libraries.
- **Type Definitions**: Enhanced TypeScript types for better development experience.
- **Structures**: Common Win32 structures pre-defined for immediate use.
- **Native Mock Compatibility**: Designed to work seamlessly with Cheatron's native mock system.

## Installation

```bash
npm install @cheatron/win32-ext
# or
bun add @cheatron/win32-ext
```

## Quick Start

```typescript
import { ACCESS_MASK, MEMORY_BASIC_INFORMATION } from '@cheatron/win32-ext';

// Use extended Win32 definitions
const access: ACCESS_MASK = 0x1f0fff;
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
