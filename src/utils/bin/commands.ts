// List of commands that do not require API calls

import React from 'react';
import * as bin from './index';
import config from '../../../config.json';
import themes from '../../../themes.json';
import { SnakeGame } from '../../components/SnakeGame';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
[theme]: change color scheme.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const su = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // Rickroll
  return `Nice try, but with little power comes... no responsibility?`;
};

export const neofetch = async (args?: string[]): Promise<string> => {
  return `
OS: Portfolio.sh  
Kernel: 6.1.12  
Uptime: ∞  
Packages: 1337  
Shell: bash  
CPU: Intel Core i7-1337  
GPU: NVIDIA RTX 4090  
Memory: 64GB RAM  
Terminal: This one :)  
  `;
};

export const hack = async (args?: string[]): Promise<string> => {
  return `Initiating hack sequence...  
[█████████-------] 50%  
[███████████████] 100%  
Access Granted! (Just kidding 😆)`;
};

export const matrix = async (args?: string[]): Promise<string> => {
  return `01001000 01100101 01101100 01101100 01101111  
01110111 01101111 01110010 01101100 01100100`;
};

export const gui = async (args?: string[]): Promise<string> => {
  window.open('http://adi-kulkarni.in', '_blank');
  return 'Opening graphical interface...';
};

export const df = async (args?: string[]): Promise<string> => {
  return `
Filesystem      Size  Used Avail Use% Mounted on  
/dev/sda1      100G   69G   31G  69%  /  
tmpfs           16G    0   16G   0%  /tmp  
/dev/sdb1      1.0T  500G  500G  50%  /mnt/storage  
  `;
};

export const top = async (args?: string[]): Promise<string> => {
  return `
PID   USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND  
1337  visitor   20   0  163944  12040   8016 S   0.7  0.2   0:01.12 portfolio.sh  
69    root      20   0  452888  39488   9996 S   0.1  0.7   0:00.99 fake-process  
  `;
};

export const ping = async (args?: string[]): Promise<string> => {
  return `PING google.com (142.250.187.142): 56 data bytes  
64 bytes from 142.250.187.142: icmp_seq=1 ttl=118 time=14.2 ms  
64 bytes from 142.250.187.142: icmp_seq=2 ttl=118 time=15.0 ms  
64 bytes from 142.250.187.142: icmp_seq=3 ttl=118 time=14.8 ms  
--- google.com ping statistics ---  
3 packets transmitted, 3 received, 0% packet loss, time 3000ms  
rtt min/avg/max/mdev = 14.2/14.6/15.0/0.3 ms`;
};

export const cat = async (args: string[]): Promise<string> => {
  if (args[0] === 'readme.txt') {
    return `Welcome to my portfolio! Type 'help' to see available commands.`;
  } else {
    return `cat: ${args[0]}: No such file or directory`;
  }
};

let commandHistory: string[] = [];

export const history = async (args?: string[]): Promise<string> => {
  return commandHistory.join('\n');
};

export const saveCommand = (cmd: string) => {
  commandHistory.push(cmd);
};

export const pwd = async (): Promise<string> => {
  const locations = [
    "/home/your/mom's/house",
    "/root/but-you-ain't-root",
    '/var/log/where-am-i',
    '/usr/bin/looking-for-love',
    '/dev/null/404-not-found',
    '/opt/this-is-not-windows',
    '/home/visitor/lost-and-found',
  ];

  // Pick a random location
  const randomLocation =
    locations[Math.floor(Math.random() * locations.length)];
  return randomLocation;
};

// Theme commands
export const theme = async (args: string[]): Promise<string> => {
  const usage = `Usage: theme [ls|set|get]
  ls  - list available themes
  set - set theme (e.g., theme set dracula)
  get - get current theme
  
Available themes: ${Object.keys(themes).join(', ')}, light`;

  if (args.length === 0) {
    return usage;
  }

  const subcommand = args[0].toLowerCase();

  switch (subcommand) {
    case 'ls':
    case 'list':
      return `Available themes:\n${Object.keys(themes)
        .map((t) => `  - ${t}`)
        .join('\n')}\n  - light\n\nUse 'theme set <name>' to change theme.`;

    case 'set':
      if (args.length < 2) {
        return 'Error: Please specify a theme name.\nUsage: theme set <theme-name>';
      }
      const themeName = args[1].toLowerCase();

      // Easter egg for light theme
      if (themeName === 'light') {
        return `🚨 INTRUDER ALERT! 🚨
        
⚠️  Light theme detected!
⚠️  Real coders use dark themes!
⚠️  Your eyes must be made of steel!

Access Denied: You are clearly not a real programmer.
Please reconsider your life choices and try a proper dark theme.

Recommended: dracula, gruvbox, monokai, nord`;
      }

      const matchedTheme = Object.keys(themes).find(
        (t) => t.toLowerCase() === themeName,
      );

      if (matchedTheme) {
        // Dispatch custom event to change theme
        window.dispatchEvent(
          new CustomEvent('changeTheme', { detail: matchedTheme }),
        );
        return `Theme changed to '${matchedTheme}'. Refresh if colors don't update immediately.`;
      } else {
        return `Error: Theme '${
          args[1]
        }' not found.\nAvailable themes: ${Object.keys(themes).join(
          ', ',
        )}, light`;
      }

    case 'get':
    case 'current':
      const currentTheme = localStorage.getItem('terminal-theme') || 'gruvbox';
      return `Current theme: ${currentTheme}`;

    default:
      return usage;
  }
};

export const themes_list = async (args: string[]): Promise<string> => {
  return theme(['ls']);
};

// Pentesting/Security Tools
export const encode = async (args: string[]): Promise<string> => {
  if (args.length < 2) {
    return `Usage: encode <type> <text>
    
Types:
  base64   - Base64 encoding
  hex      - Hexadecimal encoding
  url      - URL encoding
  rot13    - ROT13 cipher
  binary   - Binary encoding
  
Example: encode base64 Hello World`;
  }

  const type = args[0].toLowerCase();
  const text = args.slice(1).join(' ');

  try {
    switch (type) {
      case 'base64':
        return btoa(text);

      case 'hex':
        return Array.from(text)
          .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
          .join('');

      case 'url':
        return encodeURIComponent(text);

      case 'rot13':
        return text.replace(/[a-zA-Z]/g, (c) => {
          const base = c <= 'Z' ? 65 : 97;
          return String.fromCharCode(
            ((c.charCodeAt(0) - base + 13) % 26) + base,
          );
        });

      case 'binary':
        return text
          .split('')
          .map((c) => c.charCodeAt(0).toString(2).padStart(8, '0'))
          .join(' ');

      default:
        return `Unknown encoding type: ${type}\nUse 'encode' without arguments for help.`;
    }
  } catch (error) {
    return `Error encoding: ${error.message}`;
  }
};

export const decode = async (args: string[]): Promise<string> => {
  if (args.length < 2) {
    return `Usage: decode <type> <text>
    
Types:
  base64   - Base64 decoding
  hex      - Hexadecimal decoding
  url      - URL decoding
  rot13    - ROT13 cipher (same as encode)
  binary   - Binary decoding
  
Example: decode base64 SGVsbG8gV29ybGQ=`;
  }

  const type = args[0].toLowerCase();
  const text = args.slice(1).join(' ');

  try {
    switch (type) {
      case 'base64':
        return atob(text);

      case 'hex':
        return (
          text
            .match(/.{1,2}/g)
            ?.map((byte) => String.fromCharCode(parseInt(byte, 16)))
            .join('') || ''
        );

      case 'url':
        return decodeURIComponent(text);

      case 'rot13':
        return text.replace(/[a-zA-Z]/g, (c) => {
          const base = c <= 'Z' ? 65 : 97;
          return String.fromCharCode(
            ((c.charCodeAt(0) - base + 13) % 26) + base,
          );
        });

      case 'binary':
        return text
          .split(' ')
          .map((bin) => String.fromCharCode(parseInt(bin, 2)))
          .join('');

      default:
        return `Unknown decoding type: ${type}\nUse 'decode' without arguments for help.`;
    }
  } catch (error) {
    return `Error decoding: ${error.message}`;
  }
};

export const hash = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Usage: hash <text>

Generates multiple hash types for the input text:
- MD5 (deprecated, shown for reference)
- SHA-1
- SHA-256
- SHA-512

Example: hash password123`;
  }

  const text = args.join(' ');
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  try {
    // Simple MD5 implementation (for demonstration only - not cryptographically secure)
    const simpleMD5 = (str: string) => {
      // This is a placeholder - real MD5 would need full implementation
      // For demo, we'll show it's deprecated
      return '[MD5 deprecated - use SHA-256+]';
    };

    const sha1Promise = crypto.subtle.digest('SHA-1', data);
    const sha256Promise = crypto.subtle.digest('SHA-256', data);
    const sha512Promise = crypto.subtle.digest('SHA-512', data);

    const [sha1, sha256, sha512] = await Promise.all([
      sha1Promise,
      sha256Promise,
      sha512Promise,
    ]);

    const toHex = (buffer: ArrayBuffer) => {
      return Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
    };

    return `Input: "${text}"

MD5:     ${simpleMD5(text)}
SHA-1:   ${toHex(sha1)}
SHA-256: ${toHex(sha256)}
SHA-512: ${toHex(sha512)}

Note: Use SHA-256 or SHA-512 for security purposes.`;
  } catch (error) {
    return `Error generating hashes: ${error.message}`;
  }
};

export const jwt = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Usage: jwt <token>

Decodes and analyzes a JWT (JSON Web Token).
Shows header, payload, and signature information.

Example: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`;
  }

  const token = args[0];

  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return 'Error: Invalid JWT format. Expected 3 parts separated by dots.';
    }

    const [headerB64, payloadB64, signature] = parts;

    // Decode header and payload
    const header = JSON.parse(
      atob(headerB64.replace(/-/g, '+').replace(/_/g, '/')),
    );
    const payload = JSON.parse(
      atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/')),
    );

    // Format the output
    let result = '🔐 JWT Token Analysis\n\n';
    result += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    result += 'HEADER:\n';
    result += JSON.stringify(header, null, 2);
    result += '\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    result += 'PAYLOAD:\n';
    result += JSON.stringify(payload, null, 2);
    result += '\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    result += `SIGNATURE: ${signature.substring(0, 32)}...\n`;
    result += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';

    // Check expiration
    if (payload.exp) {
      const expDate = new Date(payload.exp * 1000);
      const now = new Date();
      const isExpired = expDate < now;
      result += `Expiration: ${expDate.toISOString()} ${
        isExpired ? '⚠️ EXPIRED' : '✓ Valid'
      }\n`;
    }

    if (payload.iat) {
      result += `Issued At: ${new Date(payload.iat * 1000).toISOString()}\n`;
    }

    result += '\n⚠️  Note: Signature not verified (requires secret key)';

    return result;
  } catch (error) {
    return `Error decoding JWT: ${error.message}\nMake sure you provided a valid JWT token.`;
  }
};

export const ipinfo = async (args: string[]): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ip = data.ip;

    // Get geolocation info
    const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoResponse.json();

    return `🌐 IP Information

IP Address: ${ip}
Type: ${geoData.version || 'IPv4'}
City: ${geoData.city || 'Unknown'}
Region: ${geoData.region || 'Unknown'}
Country: ${geoData.country_name || 'Unknown'} (${geoData.country || ''})
Timezone: ${geoData.timezone || 'Unknown'}
ISP: ${geoData.org || 'Unknown'}
ASN: ${geoData.asn || 'Unknown'}
Latitude: ${geoData.latitude || 'N/A'}
Longitude: ${geoData.longitude || 'N/A'}

Note: This is your public IP address.`;
  } catch (error) {
    return `Error fetching IP information: ${error.message}`;
  }
};

export const breach = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Usage: breach <email>

Checks if an email has been involved in known data breaches.
Opens Have I Been Pwned website for verification.

Example: breach test@example.com

Note: Due to CORS restrictions, this opens the HIBP website
where you can check your email securely.`;
  }

  const email = args[0];

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Error: Invalid email format.';
  }

  // Open HIBP website
  window.open(
    `https://haveibeenpwned.com/account/${encodeURIComponent(email)}`,
    '_blank',
  );

  return `🔍 Checking breaches for: ${email}

Opening Have I Been Pwned in a new tab...

The website will show:
- Number of breaches found
- Details of each breach
- Compromised data types
- Breach dates

🔒 Security Note:
- Your email is NOT sent to any third-party server
- HIBP is a trusted service by Troy Hunt
- All checks are done securely via HTTPS

Alternative: Visit https://haveibeenpwned.com directly`;
};

export const dns = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Usage: dns <domain>

Performs DNS lookup for a domain using public DNS resolvers.
Shows A, AAAA, MX, and other records.

Example: dns google.com

Note: Uses Google's DNS-over-HTTPS API.`;
  }

  const domain = args[0];

  try {
    const types = ['A', 'AAAA', 'MX', 'TXT', 'NS'];
    let result = `🔍 DNS Lookup: ${domain}\n\n`;

    for (const type of types) {
      try {
        const response = await fetch(
          `https://dns.google/resolve?name=${domain}&type=${type}`,
        );
        const data = await response.json();

        if (data.Answer && data.Answer.length > 0) {
          result += `${type} Records:\n`;
          data.Answer.forEach((record: any) => {
            result += `  ${record.data}\n`;
          });
          result += '\n';
        }
      } catch (e) {
        // Skip if record type not found
      }
    }

    if (result.split('\n').length <= 3) {
      result += 'No DNS records found or domain does not exist.';
    }

    return result;
  } catch (error) {
    return `Error performing DNS lookup: ${error.message}`;
  }
};

export const qr = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Usage: qr <text>

Generates a QR code for the provided text or URL.
The QR code will be displayed as ASCII art.

Example: qr https://example.com
Example: qr Hello World`;
  }

  const text = args.join(' ');

  try {
    // Using goqr.me API to generate QR code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
      text,
    )}`;

    return `📱 QR Code Generated!

Text: "${text}"

<img src="${qrUrl}" alt="QR Code" style="image-rendering: pixelated; border: 2px solid var(--yellow-color); padding: 10px; background: white; display: block; margin: 10px 0;" />

Scan this QR code with your phone to access the content.

Direct link: ${qrUrl}`;
  } catch (error) {
    return `Error generating QR code: ${error.message}`;
  }
};

export const short = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Usage: short <url>

Shortens a URL using a free URL shortening service.

Example: short https://www.example.com/very/long/url

Note: Uses TinyURL API (no account required).`;
  }

  const url = args[0];

  // Validate URL format
  try {
    new URL(url);
  } catch (e) {
    return 'Error: Invalid URL format. Please include http:// or https://';
  }

  try {
    // Using TinyURL API
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`,
    );

    if (!response.ok) {
      throw new Error('Failed to shorten URL');
    }

    const shortUrl = await response.text();

    return `🔗 URL Shortened Successfully!

Original URL:
${url}

Shortened URL:
${shortUrl}

You can now use this short link to share!

Note: TinyURL links never expire.`;
  } catch (error) {
    // Fallback to is.gd if TinyURL fails
    try {
      const response = await fetch(
        `https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`,
      );
      const shortUrl = await response.text();

      if (shortUrl.includes('Error')) {
        throw new Error(shortUrl);
      }

      return `🔗 URL Shortened Successfully!

Original URL:
${url}

Shortened URL:
${shortUrl}

You can now use this short link to share!`;
    } catch (fallbackError) {
      return `Error shortening URL: ${error.message}

You can manually shorten at:
- https://tinyurl.com
- https://is.gd
- https://bitly.com`;
    }
  }
};

// Fun commands
export const cowsay = async (args: string[]): Promise<string> => {
  const message = args.join(' ') || 'Moo!';
  const messageLines = message.match(/.{1,40}/g) || [message];
  const maxLength = Math.max(...messageLines.map((line) => line.length));
  const border = '_'.repeat(maxLength + 2);

  let bubble = ` ${border}\n`;
  if (messageLines.length === 1) {
    bubble += `< ${messageLines[0].padEnd(maxLength)} >\n`;
  } else {
    messageLines.forEach((line, i) => {
      if (i === 0) {
        bubble += `/ ${line.padEnd(maxLength)} \\\n`;
      } else if (i === messageLines.length - 1) {
        bubble += `\\ ${line.padEnd(maxLength)} /\n`;
      } else {
        bubble += `| ${line.padEnd(maxLength)} |\n`;
      }
    });
  }
  bubble += ` ${'-'.repeat(maxLength + 2)}`;

  return `${bubble}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
};

export const dice = async (args: string[]): Promise<string> => {
  const sides = args[0] ? parseInt(args[0]) : 6;

  if (isNaN(sides) || sides < 2) {
    return 'Usage: dice [sides]\nExample: dice 6 (default) or dice 20 for D&D';
  }

  const roll = Math.floor(Math.random() * sides) + 1;

  const diceArt: { [key: number]: string } = {
    1: `
 _______
|       |
|   •   |
|_______|
`,
    2: `
 _______
| •     |
|       |
|_____•_|
`,
    3: `
 _______
| •     |
|   •   |
|_____•_|
`,
    4: `
 _______
| •   • |
|       |
|_•___•_|
`,
    5: `
 _______
| •   • |
|   •   |
|_•___•_|
`,
    6: `
 _______
| •   • |
| •   • |
|_•___•_|
`,
  };

  const art = diceArt[roll] || '';
  return `Rolling a D${sides}...\n${art}\nYou rolled: ${roll}!`;
};

export const snake = async (
  args: string[],
): Promise<React.ReactElement | string> => {
  // Return the React component
  return React.createElement(SnakeGame, {
    onExit: () => {
      // Game will exit on ESC key
    },
  });
};

export const tetris = async (args: string[]): Promise<string> => {
  return `🎮 Tetris
  
Unfortunately, tetris requires a full interactive terminal.
But here's a tetris block for you:

    ████
    ████
    ████
    ████
    
  ▓▓    ████    ▓▓▓▓
  ▓▓▓▓  ████        ▓▓
    ▓▓  ████    ▓▓▓▓

Score: Over 9000! 🎉

Want to play games? Check out:
- dice [sides] - Roll a dice
- cowsay <message> - Make the cow say something
- snake - Play snake!

Or visit my full website: type 'gui'`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ███████████                      █████       ██████           ████   ███                      █████     
░░███░░░░░███                    ░░███       ███░░███         ░░███  ░░░                      ░░███      
 ░███    ░███  ██████  ████████  ███████    ░███ ░░░   ██████  ░███  ████   ██████      █████  ░███████  
 ░██████████  ███░░███░░███░░███░░░███░    ███████    ███░░███ ░███ ░░███  ███░░███    ███░░   ░███░░███ 
 ░███░░░░░░  ░███ ░███ ░███ ░░░   ░███    ░░░███░    ░███ ░███ ░███  ░███ ░███ ░███   ░░█████  ░███ ░███ 
 ░███        ░███ ░███ ░███       ░███ ███  ░███     ░███ ░███ ░███  ░███ ░███ ░███    ░░░░███ ░███ ░███ 
 █████       ░░██████  █████      ░░█████   █████    ░░██████  █████ █████░░██████  ██ ██████  ████ █████
░░░░░         ░░░░░░  ░░░░░        ░░░░░   ░░░░░      ░░░░░░  ░░░░░ ░░░░░  ░░░░░░  ░░ ░░░░░░  ░░░░ ░░░░░ 
                                                                                                         

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
If you're not familiar with the CLI, type 'gui' to open the graphical interface.

`;
};
