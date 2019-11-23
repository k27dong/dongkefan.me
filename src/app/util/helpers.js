export const getAge = () => {
  const birth = 2000
  const now = new Date().getFullYear()

  return (now - birth).toString();
}