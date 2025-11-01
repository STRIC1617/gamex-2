
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  const isDark = saved ? saved === 'dark' : prefersDark;

  if (isDark) {
    document.body.classList.add('dark');
    if (toggleBtn) toggleBtn.textContent = '🌞';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const darkNow = document.body.classList.contains('dark');
      toggleBtn.textContent = darkNow ? '🌞' : '🌙';
      localStorage.setItem('theme', darkNow ? 'dark' : 'light');
    });
  }
});
