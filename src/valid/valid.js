export const required = (value) => {
  if(value) return undefined
  return 'error'
}

export const maxLengthCreator = (max) => (value) => {
  if(value.length > max) return `Вы ввели 30 символов`
  return undefined
}