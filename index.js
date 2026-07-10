
#!/usr/bin/env node

function generatePassword(length = 12, options = {}) {
  const { 
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = true
  } = options;

  let characters = "";
  if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) characters += "0123456789";
  if (includeSymbols) characters += "!@#$%^&*()_+-=[]{}|;:",.<>/?";

  if (characters.length === 0) {
    throw new Error("Pelo menos um tipo de caractere deve ser incluído.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// CLI Logic
if (require.main === module) {
  const yargs = require("yargs");

  const argv = yargs
    .option("length", {
      alias: "l",
      description: "Comprimento da senha",
      type: "number",
      default: 12,
    })
    .option("no-uppercase", {
      description: "Excluir letras maiúsculas",
      type: "boolean",
      default: false,
    })
    .option("no-lowercase", {
      description: "Excluir letras minúsculas",
      type: "boolean",
      default: false,
    })
    .option("no-numbers", {
      description: "Excluir números",
      type: "boolean",
      default: false,
    })
    .option("no-symbols", {
      description: "Excluir símbolos",
      type: "boolean",
      default: false,
    })
    .help()
    .alias("help", "h").argv;

  try {
    const password = generatePassword(argv.length, {
      includeUppercase: !argv["no-uppercase"],
      includeLowercase: !argv["no-lowercase"],
      includeNumbers: !argv["no-numbers"],
      includeSymbols: !argv["no-symbols"],
    });
    console.log("Senha gerada:", password);
  } catch (error) {
    console.error("Erro:", error.message);
  }
} else {
  // Module export
  module.exports = generatePassword;
}
