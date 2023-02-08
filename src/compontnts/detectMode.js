export default (datectMode) => {
  // 1. Проверка темной темы на уровне системных настроек
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return 'dark'
  }
  return 'light'
}