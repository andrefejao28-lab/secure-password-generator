# Secure Password Generator

A command-line interface (CLI) and module for generating secure, customizable passwords.

## Features

- Generate passwords of specified length.
- Include/exclude uppercase letters, lowercase letters, numbers, and symbols.
- Can be used as a CLI tool or imported as a module in other Node.js projects.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/secure-password-generator.git
   cd secure-password-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make the CLI script executable (if using directly):
   ```bash
   chmod +x index.js
   ```
   Or, if you want to use it globally:
   ```bash
   npm link
   ```

## Usage

### As a Command-Line Tool

```bash
generate-password --length 16 --no-symbols
```

**Options:**

- `--length`, `-l`: Specify the length of the password (default: 12).
- `--no-uppercase`: Exclude uppercase letters.
- `--no-lowercase`: Exclude lowercase letters.
- `--no-numbers`: Exclude numbers.
- `--no-symbols`: Exclude symbols.
- `--help`, `-h`: Display help information.

**Examples:**

- Generate a 20-character password with default options:
  ```bash
  generate-password -l 20
  ```
- Generate a password without symbols and numbers:
  ```bash
  generate-password --no-symbols --no-numbers
  ```

### As a Module

You can import the `generatePassword` function into your Node.js projects:

```javascript
const generatePassword = require("./index");

const password = generatePassword(15, {
  includeNumbers: false,
  includeSymbols: true,
});
console.log(password);

const simplePassword = generatePassword(8, {
  includeUppercase: false,
  includeSymbols: false,
});
console.log(simplePassword);
```

## Technologies Used

- Node.js
- `yargs` (for CLI argument parsing)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
