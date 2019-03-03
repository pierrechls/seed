module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A vue-cli project who plants seeds'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
  },
  helpers: {
    chandeDirectory: () => {
      return (process.argv[3] === undefined || process.argv[3] === '.')
        ? ''
        : `  cd ${process.argv[3]}\n`
    }
  },
  completeMessage: 'To get started:\n\n{{chandeDirectory}}  yarn install\n  yarn serve\n\nDocumentation can be found at https://pierrechls.github.io/seed'
}
