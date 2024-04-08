export function generateUserDisplayName(name: string): string {
  const arrayName = name.trim().split(' ')

  if (arrayName.length === 1) {
    return arrayName[0]
  }
  else {
    return `${arrayName[0]} ${arrayName[arrayName.length - 1]}`
  }
}
