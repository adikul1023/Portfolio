// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

const fallbackQuotes = [
  '"Talk is cheap. Show me the code." — Linus Torvalds',
  '"Programs must be written for people to read, and only incidentally for machines to execute." — Harold Abelson',
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
  '"First, solve the problem. Then, write the code." — John Johnson',
  '"Code is like humor. When you have to explain it, it\'s bad." — Cory House',
  '"Simplicity is the soul of efficiency." — Austin Freeman',
  '"Before software can be reusable it first has to be usable." — Ralph Johnson',
  '"Make it work, make it right, make it fast." — Kent Beck',
  '"The best error message is the one that never shows up." — Thomas Fuchs',
  '"The most disastrous thing that you can ever learn is your first programming language." — Alan Kay',
  '"If debugging is the process of removing bugs, then programming must be the process of putting them in." — Edsger Dijkstra',
  '"Premature optimization is the root of all evil." — Donald Knuth',
  '"It\'s not a bug – it\'s an undocumented feature." — Anonymous',
  '"There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton',
  '"Walking on water and developing software from a specification are easy if both are frozen." — Edward V Berard',
];

export const quote = async (args: string[]): Promise<string> => {
  try {
    const data = await getQuote();
    return data.quote;
  } catch (error) {
    // Use fallback quotes if API fails
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    return randomQuote;
  }
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
