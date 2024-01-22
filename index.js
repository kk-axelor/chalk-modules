import { fileURLToPath } from "url"
import path from 'path'
import chalk from "chalk"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


console.log(chalk.red(__dirname))
