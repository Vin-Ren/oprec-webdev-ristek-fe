function formatDuration(seconds: number, locale: string = 'en'): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // Get the localization for the specified language or fall back to English
  const terms = {
    hour: 'h', minute: 'm', second: 's'
  };

  const parts: string[] = [];

  // Add hours if greater than 0
  if (hours > 0) {
    parts.push(`${hours}${terms.hour}`);
  }

  // Add minutes if greater than 0
  if (minutes > 0) {
    parts.push(`${minutes}${terms.minute}`);
  }

  // Add seconds if greater than 0 or if no other parts exist
  if (remainingSeconds > 0 || parts.length === 0) {
    parts.push(`${remainingSeconds}${terms.second}`);
  }

  // Return the final formatted duration string, concatenated together
  return parts.join(' ');
}

export default formatDuration;
